import fetch from "node-fetch";
import vision from "@google-cloud/vision";

export default async function handler(req, res) {
  try {
    const client = new vision.ImageAnnotatorClient({
      credentials: JSON.parse(process.env.COULD_VISION_SERVICE_ACCOUNT),
    });
    const { imgUrl } = req.body;
    const [result] = await client.textDetection(imgUrl);
    const text = result.fullTextAnnotation.text;

    res.status(200).json(text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error ${error}` });
  }
}
