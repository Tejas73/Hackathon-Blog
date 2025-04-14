// built-in modules
const express = require('express');

// user-defined modules
const pool = require('../db/pool');
const result = require('./result');

const router = express.Router();

// Create a new blog
router.post('/newblog', (req, res) => {
  const { title, content, author, category_id } = req.body;
  const user_id = req.userId; // set by JWT middleware

  const sql = `INSERT INTO blogs(title, contents, author, category_id, user_id) VALUES (?, ?, ?, ?, ?)`;

  pool.query(sql, [title, content, author, category_id, user_id], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

// Get all blogs
router.get('/allblogs', (req, res) => {
  const sql = `
    SELECT 
      b.bid, 
      b.title AS blog_title, 
      b.contents, 
      b.created_time, 
      b.author, 
      c.title AS category_title 
    FROM blogs b
    JOIN categories c ON c.cid = b.category_id
  `;

  pool.query(sql, (error, data) => {
    if (error) return res.send(result.createErrorResult(error));
    if (!data.length) return res.send(result.createErrorResult("No blogs found"));
    res.send(result.createResult(data));
  });
});

// Get my blogs
router.get('/myblogs', (req, res) => {
  const user_id = req.userId;

  const sql = `
    SELECT 
      b.bid, 
      b.title AS blog_title, 
      b.contents, 
      b.created_time, 
      b.author, 
      c.title AS category_title 
    FROM blogs b
    JOIN categories c ON c.cid = b.category_id
    WHERE b.user_id = ?
  `;

  pool.query(sql, [user_id], (error, data) => {
    if (error) return res.send(result.createErrorResult(error));
    if (!data.length) return res.send(result.createErrorResult("No blogs found"));
    res.send(result.createResult(data));
  });
});

// Edit a blog
router.put('/editblog', (req, res) => {
  const { title, contents, bid } = req.body;

  const sql = `UPDATE blogs SET title = ?, contents = ? WHERE bid = ?`;

  pool.query(sql, [title, contents, bid], (error, data) => {
    if (error) return res.send(result.createErrorResult(error));
    if (data.affectedRows === 0) return res.send(result.createErrorResult("No blog found to update"));
    res.send(result.createResult("Blog updated successfully"));
  });
});

// Search for blogs by keyword
router.get('/findblog', (req, res) => {
  const { word } = req.query;

  const sql = `
    SELECT * FROM blogs 
    WHERE title LIKE ? OR contents LIKE ?
  `;
  const pattern = `%${word}%`;

  pool.query(sql, [pattern, pattern], (error, data) => {
    if (error) return res.send(result.createErrorResult(error));
    if (!data.length) return res.send(result.createErrorResult("No blogs matched the search word"));
    res.send(result.createResult(data));
  });
});

module.exports = router;
