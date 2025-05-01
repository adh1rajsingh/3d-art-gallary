// src/data/artworks.ts

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  description: string;
  medium: string;
  dimensions: string;
  color: string; // Keep for fallback or remove if completely unused
  imageUrl: string; // <-- ADD THIS PROPERTY
  scale?: number;
  
}

export const artworks: Artwork[] = [
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-2",
    title: "Urban Reflections",
    artist: "James Chen",
    year: 2019,
    description: "...",
    medium: "Acrylic on canvas",
    dimensions: "150 x 120 cm",
    scale: 1.5,
    color: "#E97451",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/balls.jpg",

  },
  {
    id: "artwork-3",
    title: "Serene Forest",
    artist: "Maya Wilson",
    year: 2022,
    description: "...",
    medium: "Oil on linen",
    dimensions: "90 x 120 cm",
    color: "#308446",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png",
  },
  // ... Add 'imageUrl' property with YOUR links for ALL other artworks ...
  {
    id: "artwork-11",
    title: "Celestial Dance",
    artist: "Olivia Chen",
    year: 2022,
    description: "...",
    medium: "Mixed media on canvas",
    dimensions: "150 x 150 cm",
    color: "#191970",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png",
  },
  {
    // Note: The central piece is 3D, so imageUrl doesn't apply directly here.
    // We'll keep its color for the material.
    id: "central-piece",
    title: "Infinite Possibilities",
    artist: "Marcus Rivera",
    year: 2023,
    description: "...",
    medium: "Polished bronze",
    dimensions: "50 x 50 x 50 cm",
    color: "#ff4757",
    imageUrl: "", // Add empty string or a placeholder if needed for type consistency
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },

   {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },

   {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno", 
    year: 2023,
    description: "...uifhieobgfuio ewgfyiowegfiwef ewyifgioewgfb ieorfbgi rebgf ierbfip ebfip ehbgf ipewbfipeuwbf uhbfeiubeoufhef uefh oeuhf euohf oewufh oewuhf oweuhf ouewhf ouewh fuoweh fuoewh fouewh fouewh fouewh fouew hfouew hfouew hfoewu hfou wehfouwe fuoewh f",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
    // --- REPLACE WITH YOUR ACTUAL CDN LINK ---
    imageUrl: "/flower.jpg",
  },
  
];
