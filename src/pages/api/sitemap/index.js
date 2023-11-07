import { supabaseAdmin } from "../../../../lib/supabaseClient";
import { sanitizeString } from "../../../../lib/utilities";

async function getGigs() {
  let { data } = await supabaseAdmin
    .from("event")
    .select("uid, title, description, image");
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
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"> 
    <url>
      <loc>https://giggity.co.za</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>0.9</priority>
      <changefreq>daily</changefreq>
      <image:image>
        <image:loc>https://giggity.co.za/landing.png</image:loc>
        <image:title>Giggity Landing Page</image:title>
        <image:caption>This is the landing page for https://giggity.co.za</image:caption>
      </image:image>
    </url>
    <url>
      <loc>https://giggity.co.za/app</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>1.0</priority>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>https://giggity.co.za/onboard</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>0.1</priority>
      <changefreq>monthly</changefreq>
    </url>
    <url>
      <loc>https://giggity.co.za/onboard/login</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>0.8</priority>
      <changefreq>monthly</changefreq>
    </url>
    <url>
      <loc>https://giggity.co.za/signup</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>0.9</priority>
      <changefreq>monthly</changefreq>
    </url>
    <url>
      <loc>https://giggity.co.za/changelogs</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>0.3</priority>
      <changefreq>monthly</changefreq>
    </url>
    <url>
      <loc>https://giggity.co.za/privacy</loc>
      <lastmod>${isoDate}</lastmod>
      <priority>0.1</priority>
      <changefreq>monthly</changefreq>
    </url>
    ${data
      .map((gig) => {
        const encodedTitle = encodeURIComponent(gig.title);
        return `
                <url>
                    <loc>${`https://giggity.co.za/app/gig/${gig.uid}/${encodedTitle}`}</loc>
                    <lastmod>${isoDate}</lastmod>
                    <priority>0.7</priority>
                    <changefreq>daily</changefreq>
                    <image:image>
                      <image:loc>${gig.image}</image:loc>
                      <image:title><![CDATA[${gig.title}]]></image:title>
                      <image:caption>
                      <![CDATA[${gig.description}]]>
                      </image:caption>
                    </image:image>
                </url>
            `;
      })
      .join("")}
    </urlset>`;

  res.end(xml);
}
