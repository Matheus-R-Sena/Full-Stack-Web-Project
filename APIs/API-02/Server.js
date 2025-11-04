import express from 'express'; // or const express = require('express');
import morgan from 'morgan';   // for logging requests
import bodyParser from 'body-parser'; // parsing request bodies

const app = express(); // ← Express instance

// ----- Middleware ----- //
// Log all requests
app.use(morgan('dev'));

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies (like form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static('public'));

// Custom middleware example
app.use((req, res, next) => {
  console.log('Request received at', new Date());
  next(); // Pass to next middleware or route
});

// ----- Routes ----- //
// GET request to root
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// GET request with URL parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

// POST request
app.post('/user', (req, res) => {
  const userData = req.body;
  res.json({ message: 'User created', data: userData });
});

// PUT request
app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.json({ message: `User ${userId} updated`, data: updatedData });
});

// DELETE request
app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} deleted` });
});

// ----- Error handling ----- //
// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// ----- Start server ----- //
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

