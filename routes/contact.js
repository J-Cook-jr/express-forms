const express = require('express');

const router = express.Router();

// GET /contact
router.get('/', (req, res) => {
  res.render('contact', {
    title: "Contact information",
    submitted: false,
  });
});

// POST /contact
router.post('/', (req, res) => {
  res.render('contact', {
    title: 'Contact info saved',
    submitted: true,
  });
});

module.exports = router;