export default async function handler(req, res) {
  try {
    const { artistId } = req.body;

    const tokenResponse = await fetch(
      `${process.env.API_URL}/api/spotifyToken`
    );
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const artistResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!artistResponse.ok) {
      throw new Error(
        `Failed to fetch data from Spotify API: ${artistResponse.status}`
      );
    }

    const artistData = await artistResponse.json();

    res.status(200).json({ artistData, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching data from the Spotify API",
    });
  }
}
