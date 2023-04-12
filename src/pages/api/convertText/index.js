const OPENAI_API_KEY = process.env.OPEN_API_KEY;
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { text } = req.body;
    const cleanText = text.toLowerCase().replace(/\r?\n|\r/g, " ") + " ";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${cleanText} - Extract title, artists, venue, location, date, time, price, doorPrice and organiser. Respond with a json object, artists should be an array of objects with id and name, id should be the index. price is first price seen or the online price, price must be a number. Venue is a street address or the name of a place. Location is the city in which the venue is. Date should only be one date, ignore the year. Time should only be one time. If you cannot find a value for a key set it to null.`,
          },
        ],
        temperature: 0,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to process text with OpenAI API");
    }

    const data = await response.json();
    const final = JSON.parse(data.choices[0].message.content);
    console.log("response from image extraction");

    res.status(200).json(final);
  } catch (error) {
    console.error("Error processing text with OpenAI API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
