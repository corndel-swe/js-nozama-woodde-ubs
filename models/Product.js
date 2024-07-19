import db from '../db/index.js'

class Product {
  static async findAll() {
    const query = `
      SELECT id, name, description, price, stockQuantity, imageURL 
      FROM products
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {

    const query = `
    SELECT id, name, description, price, stockQuantity, imageURL 
    FROM products WHERE id = ?
    `
    const results = await db.raw(query, [id])
    return results[0]
  }

  static async findByCategoryId(categoryId) {
    const query = `
    SELECT id, name, description, price, stockQuantity, imageURL 
    FROM products 
    JOIN product_categories on products.id = product_categories.productId
    WHERE product_categories.categoryId = ?
    `
    const results = await db.raw(query, categoryId)
    return results[0]

  }


  static async create(name, description, price, stockQuantity, imageURL) {
    const query = `
    INSERT INTO products(name, description, price, stockQuantity, imageURL)
    VALUES (?, ?, ?, ?, ?)
    `
    await db.raw(query, [name, description, price, stockQuantity, imageURL])

  }
}


export default Product
