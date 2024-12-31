const openai = require('../config/openai.config');

const createCompletion = async (messages) => {
  try {
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      temperature: 1,
      messages,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error creating completion:");
    return "Sorry, there was an error processing your request.";
  }
};

const handleWeddingPlannerRequest = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).send({ error: "Query is required" });
  }

  try {
    const systemMessage = process.env.WEDDING_PROMPT;
    const messages = [
      { role: "system", content: systemMessage },
      {
        role: "user",
        content: `Generate a roadmap in JSON format related to the title: ${query} which has the JSON structure: {query: ${query}, chapters: {chapterName: [{moduleName: string, moduleDescription: string, link?: string}]}}`,
      },
    ];

    const response = await createCompletion(messages);
    res.send({ answer: response });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { handleWeddingPlannerRequest };
