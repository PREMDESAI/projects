process.noDeprication = true;

const OpenAI= require('openai');
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const openai = new OpenAI();

function parseHtmlEntities(str) {
  return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}

function padNumber(value) {
  return value.toString().padStart(2, "0");
}

const ignore = ["[Music]", "foreign"];

async function getTranscript(videoId) {
  // TODO: cache transcripts in file in case of failure
  const { data: html } = await axios.get(
    "https://www.youtube.com/watch?v=" + videoId
  );
  let parts = html.match(
    /playerCaptionsTracklistRenderer":\{"captionTracks":\[\{"baseUrl":"(.*?)",/
  );
  if (parts) {
    let [, url] = parts;
    url = url.replaceAll("\\u0026", "&");
    const { data: xml } = await axios.get(url);
    const $ = cheerio.load(xml);
    let transcriptText = "";
    $("transcript text").each((i, el) => {
      const $el = $(el);
      const text = parseHtmlEntities($el.text());
      if (ignore.includes(text)) return;
      const start = Number($el.attr("start"));
      const seconds = Math.floor(start % 60);
      const minutes = Math.floor((start / 60) % 60);
      const hours = Math.floor(start / 3600);
      const timestamp = [hours, minutes, seconds].map(padNumber).join(":");
      transcriptText += `${timestamp}\n${text}\n`;
    });
    console.log(transcriptText.length / 4);
    await fs.promises.writeFile("transcript.txt", transcriptText, "utf-8");
    return { text: transcriptText, id: videoId };
  } else {
    console.log("Captions not found...");
    return { text: '', id: videoId };
  }
}

async function summarizeTranscript({ id, text }) {
  if (!text) return;
  try {
    const system_message = "You are question answering & Coding Assistant bot for youtube video,The transcript you will be given has a timestamp on one line and the next line is the correspond text for that timestamp. This repeats for the whole transcript, Answer in Points and headings. The given transcript might include incorrect or wrong translations, always assume the speaker is talking about programming and correct the transcript accordingly.";
    const question = 'what is this video about?'

    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": system_message},
            {"role": "user", "content": `This is the Transcript: ${text}`},
            {"role": "user", "content": question}
        ],
        model: "gpt-3.5-turbo-1106",
      });
    
    console.log(completion.choices[0]);
    await fs.promises.writeFile(`./completions/${Date.now()}-${id}.json`, JSON.stringify({ content: completion.choices[0].message.content }, null, 2), 'utf-8');


  } catch (error) {
    if (error.response && error.response.data) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

// getTranscript('eHzoTLwx01E');
getTranscript("eHzoTLwx01E").then(summarizeTranscript);