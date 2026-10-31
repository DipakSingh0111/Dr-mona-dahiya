"use client";

import { useState } from "react";
import LocationsHero from "@/components/sections/locations/LocationsHero";
import LocationsRegistration from "@/components/sections/locations/LocationsRegistration";
import LocationsCityCards from "@/components/sections/locations/LocationsCityCards";
import LocationsDirectory from "@/components/sections/locations/LocationsDirectory";

export default function LocationsShell() {
  const [query, setQuery] = useState("");

  return (
    <>
      <LocationsHero query={query} onQueryChange={setQuery} />
      <LocationsRegistration />
      <LocationsCityCards />
      <LocationsDirectory query={query} />
    </>
  );
}
