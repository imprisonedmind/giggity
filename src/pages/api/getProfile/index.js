export default async function handler(req, res) {
  try {
    const { user_id } = req.body;

    const tokenResponse = await fetch(
      `${process.env.API_URL}/api/spotifyToken`
    );
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const profileResponse = await fetch(
      `https://api.spotify.com/v1/users/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!profileResponse.ok) {
      throw new Error(
        `Failed to fetch data from Spotify API: ${profileResponse.status}`
      );
    }

    const data = await profileResponse.json();

    res.status(200).json({ data, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching data from the Spotify API",
    });
  }
}
