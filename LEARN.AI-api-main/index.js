const express = require('express');
const OpenAI = require('openai');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const openai = new OpenAI();

function parseHtmlEntities(str) {
  return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

function padNumber(value) {
  return value.toString().padStart(2, '0');
}

const ignore = ['[Music]', 'foreign'];

async function getTranscript(videoId) {
  try {
    const { data: html } = await axios.get(
      'https://www.youtube.com/watch?v=' + videoId
    );
    let parts = html.match(
      /playerCaptionsTracklistRenderer":\{"captionTracks":\[\{"baseUrl":"(.*?)",/
    );
    if (parts) {
      let [, url] = parts;
      url = url.replaceAll('\\u0026', '&');
      const { data: xml } = await axios.get(url);
      const $ = cheerio.load(xml);
      let transcriptText = '';
      $('transcript text').each((i, el) => {
        const $el = $(el);
        const text = parseHtmlEntities($el.text());
        if (ignore.includes(text)) return;
        const start = Number($el.attr('start'));
        const seconds = Math.floor(start % 60);
        const minutes = Math.floor((start / 60) % 60);
        const hours = Math.floor(start / 3600);
        const timestamp = [hours, minutes, seconds]
          .map(padNumber)
          .join(':');
        transcriptText += `${timestamp}\n${text}\n`;
      });

      return { text: transcriptText, id: videoId };
    } else {
      console.log('Captions not found...');
      return { text: '', id: videoId };
    }
  } catch (error) {
    console.error('Error fetching transcript:', error.message);
    return { text: '', id: videoId };
  }
}



async function summarizeTranscript(id, text, question) {
  if (!text) return;
  try {
    const system_message =
      'You are question answering & Coding Assistant bot for youtube video,The transcript you will be given has a timestamp on one line and the next line is the correspond text for that timestamp. This repeats for the whole transcript, Answer in Points and headings. The given transcript might include incorrect or wrong translations, always assume the speaker is talking about programming and correct the transcript accordingly.';
    // const question = 'what is this video about?';

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: system_message },
        { role: 'user', content: `This is the Transcript: ${text}` },
        { role: 'user', content: question },
      ],
      model: 'gpt-3.5-turbo-1106',
    });

    const answer = completion.choices[0].message.content;
    console.log(answer);

    return { id, answer };
  } catch (error) {
    console.error('Error summarizing transcript:', error.message);
    return { id, answer: '' };
  }
}

app.post('/api/AI/getTranscript', async (req, res) => {
  const { videoUrl } = req.body;
  const videoId = videoUrl.split('v=')[1];
  const result = await getTranscript(videoId);
  res.json(result);
});

app.post('/api/AI/videoChat', async (req, res) => {
  const { id, text, question } = req.body;
  const result = await summarizeTranscript(id, text, question);
  res.json(result);
});

app.get('/', (req, res) => res.send('Hello World!, MyAPI is workiiing'));
app.listen(port, () => console.log(`Server is running on port ${port}`));
