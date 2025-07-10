const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { invest } = require('../controllers/investcontroller');

router.post('/:id', auth, role(['investor']), invest);

module.exports = router;
