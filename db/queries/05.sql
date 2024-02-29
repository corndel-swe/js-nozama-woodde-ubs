.mode markdown

-- Retrieve the latest 10 products added to the database

SELECT name, description, price
FROM products
ORDER BY id DESC
LIMIT 10;
