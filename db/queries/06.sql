.mode markdown

-- Find the most expensive product in each category

SELECT c.name AS CategoryName, p.name AS ProductName, MAX(p.price) AS MaxPrice
FROM categories c
JOIN product_categories pc ON c.id = pc.categoryId
JOIN products p ON pc.productId = p.id
GROUP BY c.name
ORDER BY MaxPrice DESC;
