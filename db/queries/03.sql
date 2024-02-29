.mode markdown

-- Average product price per category

SELECT c.name AS CategoryName, AVG(p.price) AS AveragePrice
FROM categories c
JOIN product_categories pc ON c.id = pc.categoryId
JOIN products p ON pc.productId = p.id
GROUP BY c.name
ORDER BY AveragePrice DESC;
