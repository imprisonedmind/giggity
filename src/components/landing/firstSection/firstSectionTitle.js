"use client";
import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import SectionHeader from "@/components/landing/sectionHeader";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export default function FirstSectionTitle({ apiKey }) {
  const [nearestCity, setNearestCity] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    const storedCity = localStorage.getItem("nearestCity");
    if (storedCity) {
      setNearestCity(storedCity);
    } else {
      if (navigator.geolocation) {
        setTimeout(() => {
          navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
              try {
                const { latitude, longitude } = coords;

                const geocoder = new window.google.maps.Geocoder();
                const location = new window.google.maps.LatLng(
                  latitude,
                  longitude
                );

                geocoder.geocode({ location }, (results, status) => {
                  if (status === "OK" && results[0]) {
                    const addressComponents = results[0].address_components;
                    const cityResult = addressComponents.find((component) =>
                      component.types.includes("locality")
                    );

                    if (cityResult) {
                      const city = cityResult.long_name;
                      setNearestCity(city);
                      localStorage.setItem("nearestCity", city);
                    }
                  }
                });
              } catch (error) {
                console.error("Error getting user location:", error);
              }
            },
            (error) => {
              console.error("Error getting user location:", error);
            }
          );
        }, 50);
      }
    }
  }, [apiKey]);

  const title = nearestCity
    ? `Giggity | Find live music gigs in ${nearestCity}.`
    : "Giggity | Find live music gigs near you!";

  if (nearestCity === null)
    return (
      <div>
        <SectionHeader title={`Find live music gigs!`} />
      </div>
    );

  return (
    <>
      {title && <title>{title}</title>}
      <SectionHeader
        title={`Find live music gigs in ${
          nearestCity || "Cape Town"
        } with Giggity.`}
      />
    </>
  );
}
