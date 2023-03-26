export default function GigHead({ item }) {
  return (
    <head>
      <meta property="og:title" content={item.title} />
      <meta property="og:description" content={item.description} />
      <meta
        property="og:image"
        content={`https://giggity-ruddy.vercel.app/api/gigImage?title="${item.title}"&gigImg="${item.image}"`}
      />
      <meta
        name="twitter:image"
        content={`https://giggity-ruddy.vercel.app/api/gigImage?title="${item.title}"&gigImg="${item.image}"`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </head>
  );
}
