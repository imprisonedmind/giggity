const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPEN_API_KEY;

export default async function handler(req, res) {
  try {
    const { imgUrl } = req.body;
    const messages = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `
              Extract title, artists, venue, location, date, time, price, doorPrice and 
              organiser. 
              If there is no distinct title, make one will all the artists and presented 
              by organiser
              Artists should be an array of objects with id and name, id should be the 
              index.
              Date should only be one date, ignore the year.
              Time should only be one time.
              price should be a single numeric value. 
              Location is the city in which the venue is.
              Generate a description value that follows great SEO and high ranking. 
              If you cannot find a value for a key, set it to null.
              Respond with a JSON object, no syntax styling.
            `,
          },
          { type: "image_url", image_url: imgUrl },
        ],
      },
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4-vision-preview",
        messages: messages,
        // response_format: { type: "json_object" },
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to process image with OpenAI API");
    }

    const data = await response.json();
    console.log(
      `response from image extraction: ${data.choices[0].message.content}`
    );
    const final = JSON.parse(data.choices[0].message.content);

    res.status(200).json(final);
  } catch (error) {
    console.error("Error processing image with OpenAI API:", error);
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
}
