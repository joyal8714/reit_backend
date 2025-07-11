const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { addProperty, getAllProperties, getProperty } = require('../controllers/propertycontroller');

router.post('/add', auth, role(['admin']), addProperty);
router.get('/',auth, getAllProperties);
router.get('/:id', auth, getProperty);

module.exports = router;
