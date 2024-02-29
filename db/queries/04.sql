.mode markdown

-- List products with stock below 5

SELECT name, stockQuantity
FROM products
WHERE stockQuantity < 20;
