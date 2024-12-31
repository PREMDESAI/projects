const openai = require('../config/openai.config');

const createCompletion = async (messages) => {
  try {
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error creating completion:", error);
    return "Sorry, there was an error processing your request.";
  }
};

const getPrompt = (religion) => {
  switch (religion.toLowerCase()) {
    case "hindu":
      return process.env.HINDU_PROMPT;
    case "muslim":
      return process.env.MUSLIM_PROMPT;
    case "christian":
      return process.env.CHRISTIAN_PROMPT;
    default:
      throw new Error("Invalid religion specified");
  }
};

const handleChatbotRequest = async (req, res) => {
  const { religion } = req.params;
  const { message } = req.body;

  if (!message) {
    return res.status(400).send({ error: "Message is required" });
  }

  try {
    const systemMessage = getPrompt(religion);
    const messages = [
      { role: "system", content: systemMessage },
      { role: "user", content: message },
    ];

    const response = await createCompletion(messages);
    res.send({ answer: response });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { handleChatbotRequest };
