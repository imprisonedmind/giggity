import fetch from 'node-fetch';
import vision from '@google-cloud/vision';

const client = new vision.ImageAnnotatorClient({
  keyFilename: "serviceAccount/cloudVisionServiceAccount.json"
});

export default async function handler(req, res) {
  const {imgUrl} = req.body;

  try {
    const [result] = await client.textDetection(imgUrl);
    const text = result.fullTextAnnotation.text;

    const gigData = await fetch('http://localhost:3000/api/convertText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
      }),
    }).then(res => res.json());

    res.status(200).json(gigData);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: `Internal Server Error ${error}`});
  }
}
