const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { addproperty, getallproperties, getproperty } = require('../controllers/propertycontoller');

router.post('/add', auth, role(['admin']), addproperty);
router.get('/', auth, getallproperties);
router.get('/:id', auth, getproperty);

module.exports = router;
