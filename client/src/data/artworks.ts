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
    id: "van-gogh-almond-blossoms",
    title: "Almond Blossoms",
    artist: "Vincent van Gogh",
    year: 1890,
    description: "Branches of an almond tree in bloom against a blue sky, painted for his newborn nephew, Vincent Willem.",
    medium: "Oil on canvas",
    dimensions: "73.5 × 92 cm",
    color: "#4682B4", // Steel Blue, inspired by the sky
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135123/Gogh-BranchAlmondTree-1890_japkfg.jpg",
  },
  {
    id: "van-gogh-cafe-terrace",
    title: "Cafe Terrace at Night",
    artist: "Vincent van Gogh",
    description: "A vibrant depiction of a café terrace at night in Arles, notable for its perspective and color.",
    year: 1888,
    medium: "Oil on canvas",
    dimensions: "80.8 x 65.5 cm",
    scale: 1.2,
    color: "#FFD700", // Gold, inspired by the light
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135123/Gogh-CafTerraceNight-1888_htxwct.jpg",
  },
  {
    id: "van-gogh-drinkers",
    title: "The Drinkers (after Daumier)",
    artist: "Vincent van Gogh",
    year: 1890,
    description: "Van Gogh's copy of a drawing by Honoré Daumier, depicting three men drinking.",
    medium: "Oil on canvas",
    dimensions: "59 x 73 cm",
    color: "#2F4F4F", // Dark Slate Gray, inspired by the figures' clothes
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135123/Gogh-Drinkers-1890_xrtflw.jpg",
  },
  {
    id: "van-gogh-yellow-house",
    title: "The Yellow House ('The Street')",
    artist: "Vincent van Gogh",
    year: 1888,
    description: "Van Gogh's depiction of his house and studio in Arles, where he hoped to establish an artists' colony.",
    medium: "Oil on canvas",
    dimensions: "72 × 91.5 cm",
    color: "#FFFF00", // Yellow, inspired by the house
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Gogh-LaMaisonde-1888_xr9tjx.jpg",
  },
  {
    id: "van-gogh-postman-roulin",
    title: "Portrait of Postman Joseph Roulin",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "One of several portraits Van Gogh painted of his friend Joseph Roulin, the postman.",
    medium: "Oil on canvas",
    dimensions: "81.3 × 65.4 cm",
    color: "#228B22", // Forest Green, inspired by the background
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Gogh-PostmanRoulin-1889_pjonfy.jpg",
  },
  {
    id: "van-gogh-red-vineyard",
    title: "The Red Vineyard",
    artist: "Vincent van Gogh",
    year: 1888,
    description: "A vibrant depiction of a vineyard in autumn, notable for being the only work Van Gogh sold during his lifetime.",
    medium: "Oil on canvas",
    dimensions: "75 × 93 cm",
    color: "#DC143C", // Crimson, inspired by the vineyard
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Gogh-RedVineyardArles-1888_vbhiec.jpg",
  },
  {
    id: "van-gogh-irises",
    title: "Irises",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "Painted in the asylum at Saint-Rémy-de-Provence, a study of irises full of life.",
    medium: "Oil on canvas",
    dimensions: "71.3 × 93.3 cm",
    color: "#4169E1", // Royal Blue, inspired by the irises
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135125/Vincent_van_Gogh-Irises-1889_bfxuhw.jpg",
  },
  {
    id: "van-gogh-landscape-trees-figure",
    title: "Landscape with Trees and Figures",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "A landscape with expressive trees and figures, characteristic of his Saint-Rémy period.",
    medium: "Oil on canvas",
    dimensions: "54 × 65 cm",
    color: "#8FBC8F", // Dark Sea Green, inspired by the landscape
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Vincent_van_Gogh-LandscapeFigures-1889_urb5tb.jpg",
  },
  {
    id: "van-gogh-landscape-wheelbarrow",
    title: "Landscape with a Wheelbarrow",
    artist: "Vincent van Gogh",
    year: 1883,
    description: "A watercolor depicting a Dutch landscape with fields and a wheelbarrow.",
    medium: "Watercolor and pencil on paper",
    dimensions: "39 × 56 cm",
    color: "#556B2F", // Dark Olive Green
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Vincent_van_Gogh-LandscapeWheelbarrow-1883_gibn00.jpg",
  },
   {
    id: "van-gogh-olive-trees-yellow-sky",
    title: "Olive Trees with Yellow Sky and Sun",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "Part of a series of olive tree paintings, exploring light and color with expressive brushwork.",
    medium: "Oil on canvas",
    dimensions: "73.6 × 92.7 cm",
    color: "#FFD700", // Gold, inspired by the intense yellow sky
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135125/Vincent_Van_Gogh-OliveTrees-1889_m1fkf2.jpg",
  },
  {
    id: "van-gogh-olive-trees-saint-remy",
    title: "Olive Trees (Saint-Rémy)",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "Another painting from the olive tree series, created during his time in the asylum at Saint-Rémy.",
    medium: "Oil on canvas",
    dimensions: "73.5 × 92.5 cm",
    color: "#191970", // Midnight Blue, inspired by the background
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135125/Vincent_van_Gogh-OliveTrees-Saint_Rmy_June-July_1889_paqvrb.jpg",
  },
  {
    id: "van-gogh-starry-night",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    description: "Van Gogh's most famous work, depicting the view from his asylum window at night.",
    medium: "Oil on canvas",
    dimensions: "73.7 × 92.1 cm",
    color: "#000080", // Navy Blue, representing the night sky
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135125/Vincent_van_Gogh-StarryNight-Saint_Remy_June_1889_i2afgo.jpg",
  },
  {
    id: "van-gogh-view-auvers",
    title: "View of Auvers-sur-Oise",
    artist: "Vincent van Gogh",
    year: 1890,
    description: "A landscape painting of the town of Auvers-sur-Oise, where Van Gogh spent his final months.",
    medium: "Oil on canvas",
    dimensions: "74.6 × 93.4 cm",
    color: "#DAA520", // Goldenrod, inspired by the wheat field
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Vincent_van_Gogh-ViewAuverssurOise-1890_ehrsum.jpg",
  },
  {
    id: "van-gogh-sunflowers",
    title: "Sunflowers (Vase with Fifteen Sunflowers)",
    artist: "Vincent van Gogh",
    year: 1888,
    description: "One of a series of paintings depicting sunflowers in a vase, symbolizing gratitude.",
    medium: "Oil on canvas",
    dimensions: "92.1 x 73 cm",
    color: "#FFD700", // Gold, inspired by the sunflowers
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135123/Vincent_Willem_van_Gogh-Sunflowers-1888_or_1889_uzgoma.jpg",
  },
   {
    id: "van-gogh-self-portrait-grey-hat",
    title: "Self-Portrait with Grey Felt Hat",
    artist: "Vincent van Gogh",
    year: 1887,
    description: "One of Van Gogh's many self-portraits, experimenting with color and brushwork.",
    medium: "Oil on canvas",
    dimensions: "42 cm × 34 cm",
    color: "#4682B4", // Steel Blue, inspired by the background
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135124/Gogh-SelfportraitGreyHat-1887_f1sd8a.jpg",
  },
   {
    id: "van-gogh-sower",
    title: "The Sower",
    artist: "Vincent van Gogh",
    year: 1888,
    description: "One of Van Gogh's paintings inspired by Jean-François Millet, depicting a sower in a field.",
    medium: "Oil on canvas",
    dimensions: "64 × 80.5 cm",
    color: "#FF8C00", // Dark Orange, inspired by the sunset/sky
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135586/Gogh-Sower-1888_e2b22o.jpg",
  },
  {
    id: "van-gogh-thatched-cottages",
    title: "Thatched Cottages at Cordeville",
    artist: "Vincent van Gogh",
    year: 1890,
    description: "A painting of cottages with thatched roofs in Cordeville, near Auvers-sur-Oise.",
    medium: "Oil on canvas",
    dimensions: "50 × 65 cm", // Dimensions might need confirmation
    color: "#A0522D", // Sienna, inspired by the thatch and earth
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135586/Gogh-ThatchedCottagesCordeville-June_1890_ufqh04.jpg",
  },
   {
    id: "van-gogh-house-auvers", // Renamed based on likely subject
    title: "Houses at Auvers",
    artist: "Vincent van Gogh",
    year: 1890,
    description: "A painting of houses in the village of Auvers-sur-Oise.",
    medium: "Oil on canvas",
    dimensions: "60 × 73 cm", // Dimensions might need confirmation
    color: "#8B4513", // SaddleBrown, inspired by the roofs/buildings
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135586/Gogh-LaMaisonde-1888_cqxzge.jpg", // Filename says 1888 but context of other Auvers works suggests 1890
  },
   {
    id: "van-gogh-harvest",
    title: "The Harvest",
    artist: "Vincent van Gogh",
    year: 1888,
    description: "A depiction of a harvest scene in the Arles countryside.",
    medium: "Oil on canvas",
    dimensions: "73 × 91.5 cm", // Dimensions might need confirmation
    color: "#DAA520", // Goldenrod, inspired by the wheat fields
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135586/Gogh-Harvest_iblau6.jpg",
  },
  {
    id: "van-gogh-hospital-saint-paul",
    title: "The Courtyard of the Hospital at Arles", // Title based on image URL
    artist: "Vincent van Gogh",
    year: 1889,
    description: "A painting of the courtyard of the hospital where Van Gogh was treated in Arles.",
    medium: "Oil on canvas",
    dimensions: "73 × 92 cm", // Dimensions might need confirmation
    color: "#A9A9A9", // DarkGray, inspired by the building
    imageUrl: "https://res.cloudinary.com/dskj7wqn8/image/upload/v1746135586/Gogh-HospitalSaintPaul-October_1889_hpb2ou.jpg", // Filename mentions Saint Paul, but image is often titled "The Courtyard of the Hospital at Arles"
  },
  {
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
];
