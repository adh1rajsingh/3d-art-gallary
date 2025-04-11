// Sample art gallery data

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  description: string;
  medium: string;
  dimensions: string;
  color: string; // Used as a placeholder for actual images
}

export const artworks: Artwork[] = [
  {
    id: "artwork-1",
    title: "Abstract Harmony",
    artist: "Elena Moreno",
    year: 2021,
    description: "A vibrant exploration of color and form that invites viewers to find their own meaning within the composition. The piece plays with perception and emotional response through carefully balanced elements.",
    medium: "Oil on canvas",
    dimensions: "120 x 100 cm",
    color: "#5D8AA8",
  },
  {
    id: "artwork-2",
    title: "Urban Reflections",
    artist: "James Chen",
    year: 2019,
    description: "A contemplative study of urban architecture and its reflection in water, capturing the duality of modern existence. The piece explores themes of permanence and transience in city life.",
    medium: "Acrylic on canvas",
    dimensions: "150 x 120 cm",
    color: "#E97451",
  },
  {
    id: "artwork-3",
    title: "Serene Forest",
    artist: "Maya Wilson",
    year: 2022,
    description: "An immersive landscape that transports viewers into a peaceful woodland setting. The interplay of light and shadow creates a sense of depth and invites meditation on our connection to nature.",
    medium: "Oil on linen",
    dimensions: "90 x 120 cm",
    color: "#308446",
  },
  {
    id: "artwork-4",
    title: "Digital Dreams",
    artist: "Alex Rivera",
    year: 2020,
    description: "A fusion of traditional and digital techniques that explores the intersection of technology and human consciousness. The work questions the boundaries between reality and virtual experience.",
    medium: "Mixed media and digital print",
    dimensions: "100 x 100 cm",
    color: "#6A5ACD",
  },
  {
    id: "artwork-5",
    title: "Memories of Home",
    artist: "Sofia Patel",
    year: 2018,
    description: "A nostalgic portrayal of domestic spaces that evokes universal feelings of belonging and familiarity. Through careful attention to light and composition, the artist creates a sense of intimate comfort.",
    medium: "Watercolor on paper",
    dimensions: "60 x 80 cm",
    color: "#FF7E00",
  },
  {
    id: "artwork-6",
    title: "Ocean Rhythms",
    artist: "Daniel Johnson",
    year: 2021,
    description: "A dynamic seascape that captures the constant motion and energy of the ocean. The textured surface creates a tactile quality that mimics the feeling of waves and water in motion.",
    medium: "Acrylic with palette knife",
    dimensions: "120 x 90 cm",
    color: "#1E90FF",
  },
  {
    id: "artwork-7",
    title: "Geometric Harmony",
    artist: "Leila Hassan",
    year: 2022,
    description: "A precise arrangement of geometric forms exploring balance and proportion. The careful use of color creates visual rhythm while maintaining a sense of order and mathematical precision.",
    medium: "Acrylic on panel",
    dimensions: "80 x 80 cm",
    color: "#800080",
  },
  {
    id: "artwork-8",
    title: "Portrait of Solitude",
    artist: "Thomas Wright",
    year: 2019,
    description: "A contemplative figure study that examines themes of isolation and introspection. The minimal background focuses attention on the subject's expression and posture, inviting empathetic connection.",
    medium: "Oil on canvas",
    dimensions: "100 x 80 cm",
    color: "#CD853F",
  },
  {
    id: "artwork-9",
    title: "Industrial Beauty",
    artist: "Maria Gonzalez",
    year: 2020,
    description: "A striking depiction of industrial architecture that finds aesthetic value in functional structures. The composition transforms ordinary mechanical elements into a celebration of human engineering and design.",
    medium: "Charcoal and gouache",
    dimensions: "70 x 90 cm",
    color: "#708090",
  },
  {
    id: "artwork-10",
    title: "Autumn Whispers",
    artist: "Robert Kim",
    year: 2021,
    description: "A seasonal landscape that captures the transitional beauty of fall. Rich colors and atmospheric perspective create depth, while the composition guides the viewer through a sensory experience of the season.",
    medium: "Oil on canvas",
    dimensions: "110 x 90 cm",
    color: "#8B4513",
  },
  {
    id: "artwork-11",
    title: "Celestial Dance",
    artist: "Olivia Chen",
    year: 2022,
    description: "An abstract interpretation of cosmic phenomena that plays with scale and perspective. The work invites contemplation of our place in the universe while celebrating the beauty of astronomical patterns.",
    medium: "Mixed media on canvas",
    dimensions: "150 x 150 cm",
    color: "#191970",
  },
  {
    id: "central-piece",
    title: "Infinite Possibilities",
    artist: "Marcus Rivera",
    year: 2023,
    description: "A sculptural piece that explores mathematical concepts through form. The continuous, looping structure represents infinite possibilities and the interconnectedness of all things. As viewers move around the piece, new perspectives reveal different aspects of its complex geometry.",
    medium: "Polished bronze",
    dimensions: "50 x 50 x 50 cm",
    color: "#ff4757",
  },
];
