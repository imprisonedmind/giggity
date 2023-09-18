# Giggity.co.za

[![Cover Image](https://i.imgur.com/bvO0etf.png)](https://giggity.co.za)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

Welcome to **Giggity**, your gateway to the vibrant local music scene! 🎶

This project is my attempt to decentralise local music gig/artist/event finding via community contributions & fun tech!
The platform currently use OCR → GPT 3.5 turbo to handle autmatic form completion for gig creation, just from an event poster. Ontop of that the Spotify API
is utalised to provide rich artist specific data on each gig page.


## Links
- [Giggity.co.za](https://giggity.co.za)
- [Google Play](https://play.google.com/store/apps/details?id=za.co.giggity.twa)

## Features

- Find and explore upcoming music gigs and events.
- Discover local artists and their music.
- Directly see artists Spotify accounts & top songs.
- Forecasted weather.
- Event sharing through web api.

## Planned Features
- Filtering:
  - Country (Automatic)
  - Town (KM slider like tinder)
  - Music Genre
- Event 'hearting' & display this list.
- Event Hosting & Ticketing
- Artist Dicover & Artist biography pages (links to all socials etc)

## Getting Started

### Prerequisites

- Supbase Account & API Key
- OpenApi gpt API Key
- Google Cloud Vision API Key
- Giphy API Key
- Open Weather API Key
- Spotify Developer API Key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imprisonedmind/giggity.git
   cd giggity

2. Set .env.local variables
   ```bash
   #Local App
    APP_VERSION=
    API_URL=
    
    #Google
    COULD_VISION_SERVICE_ACCOUNT=
    GOOGLE_MAPS_API_KEY=
    
    #Supabse
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    
    #Weater
    OPEN_WEATHER_API=
    
    #Spotify
    SPOTIFY_CLIENT_ID=
    SPOTIFY_CLIENT_SECRET=
    
    #GPT
    OPEN_API_KEY=
    
    #Giphy
    NEXT_PUBLIC_GIPHY_API_URL=

 3. Install packages
    ```bash
    bun install

4. Run the dev server
   ```bash
   bun dev
