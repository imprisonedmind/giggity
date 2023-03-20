const OPENAI_API_KEY = process.env.OPEN_API_KEY;
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const {text} = req.body;
    const cleanText = text.toLowerCase().replace(/\r?\n|\r/g, " ") + " ";

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `"${cleanText}" This text was scrapped from a music poster from top to bottom, Extract title, artists, venue, location, date, time, price and doorPrice from this text and respond with a json object, artists should be an array, price should be the first price seen or the online price.`,
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    });

    if (!response.ok) {
      throw new Error('Failed to process text with OpenAI API');
    }

    const data = await response.json();
    const final = JSON.parse(data.choices[0].text)
    console.log("response from image extraction")
    console.log(final)

    res.status(200).json(final);

  } catch (error) {
    console.error("Error processing text with OpenAI API:", error.message);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
