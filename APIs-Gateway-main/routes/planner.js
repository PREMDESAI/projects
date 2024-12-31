const express = require('express');
const { handleWeddingPlannerRequest } = require('../controllers/planner');

const router = express.Router();

router.post('/AI/planner', handleWeddingPlannerRequest);

module.exports = router;
