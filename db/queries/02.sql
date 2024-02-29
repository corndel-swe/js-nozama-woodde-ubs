.mode markdown

-- Count products per category

SELECT c.name AS CategoryName, COUNT(pc.productId) AS ProductCount
FROM categories c
LEFT JOIN product_categories pc ON c.id = pc.categoryId
GROUP BY c.name
ORDER BY ProductCount DESC;
