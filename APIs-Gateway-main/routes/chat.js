const express = require('express');
const { handleChatbotRequest } = require('../controllers/chat');

const router = express.Router();

router.post('/chat/:religion', handleChatbotRequest);

module.exports = router;
