.mode markdown

-- Get products with their categories

SELECT p.name, c.name
FROM products p
JOIN product_categories pc ON p.id = pc.productId
JOIN categories c ON pc.categoryId = c.id
ORDER BY p.name;
