const OPENAI_API_KEY = process.env.OPEN_API_KEY;
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const {text} = req.body;
    const cleanText = text.toLowerCase().replace(/\r?\n|\r/g, " ") + " ";

    console.log(cleanText)

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `"${cleanText}" This text was scrapped from a music poster from top to bottom, Extract title, artists, venue, location, date, time and price from this text and respond with a json object.`,
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
    console.log("OpenAI API response:", final);

    res.status(200).json(final);

  } catch (error) {
    console.error("Error processing text with OpenAI API:", error.message);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
