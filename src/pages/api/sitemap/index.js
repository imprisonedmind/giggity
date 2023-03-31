import { supabaseAdmin } from "../../../../lib/supabaseClient";

async function getGigs() {
  let { data } = await supabaseAdmin.from("event").select("uid");
  return data;
}

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // Set modification date to date of push.
  const modDate = new Date();

  // Convert date to ISO-8601 format
  const isoDate = modDate.toISOString();

  // Get gig uids for link generation
  const data = await getGigs();

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>https://www.giggity.co.za</loc>
      <lastmod>${isoDate}</lastmod>
    </url>
    <url>
      <loc>https://www.giggity.co.za/changelogs</loc>
      <lastmod>${isoDate}</lastmod>
    </url>
    ${data
      .map((gig) => {
        return `
                <url>
                    <loc>${`https://giggity.co.za/gig/${gig.uid}`}</loc>
                    <lastmod>${isoDate}</lastmod>
                </url>
            `;
      })
      .join("")}
    </urlset>`;

  res.end(xml);
}
