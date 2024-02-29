.mode markdown

-- List products with their average rating and total number of reviews, ordered by rating:

SELECT p.name, AVG(r.rating) AS averageRating, COUNT(r.id) AS reviewCount
FROM products p
LEFT JOIN reviews r ON p.id = r.productId
GROUP BY p.id
ORDER BY averageRating DESC, reviewCount DESC;
