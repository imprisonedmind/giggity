// pages/api/spotifySearch.js

export default async function handler(req, res) {
  try {
    const tokenResponse = await fetch(
      `${process.env.API_URL}/api/spotifyToken`
    );
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const { q } = req.body;
    const type = "artist";
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${q}&type=${type}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Spotify API: ${response.status}`
      );
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching data from the Spotify API",
    });
  }
}
