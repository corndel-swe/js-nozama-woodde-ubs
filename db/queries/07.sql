.mode markdown

-- Find the average rating of each product

SELECT productId, AVG(rating) AS averageRating
FROM reviews
GROUP BY productId;
