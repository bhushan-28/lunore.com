export const INGREDIENT_CATEGORIES = ["Top Notes", "Heart Notes", "Base Notes"];

const topNotes = [
  {
    name: "May Rose Water",
    origin: "Grasse, France",
    description: "Distilled at 6 AM from fresh Centifolia rose petals, yielding a solar dew sweetness.",
    image: "/images/lunore_user_rose_wood.jpg",
    rarity: "Harvested 3 Weeks per Year",
    matchedPerfumes: ["Rose Impériale", "L'Or Absolu"]
  },
  {
    name: "Guatemalan Cardamom",
    origin: "Alta Verapaz, Guatemala",
    description: "Cold-pressed green pods providing a spicy, effervescent balsamic sparkle.",
    image: "/images/lunore_user_weekend_escape.jpg",
    rarity: "Grade A Organic Spice",
    matchedPerfumes: ["Santal Céleste", "Nuit d'Or"]
  },
  {
    name: "Sicilian Bergamot",
    origin: "Calabria, Italy",
    description: "Sun-ripened citrus zest giving liquid gold luminescence.",
    image: "/images/lunore_user_soul_cafe.jpg",
    rarity: "Protected Origin Consortium",
    matchedPerfumes: ["L'Or Absolu", "Soleil Absolu"]
  },
  {
    name: "Tunisian Neroli",
    origin: "Cap Bon, Tunisia",
    description: "Bitter orange blossom petals gathered by hand on Mediterranean hillsides.",
    image: "/images/lunore_user_car_bonnet.jpg",
    rarity: "Steam Distilled Artisanal",
    matchedPerfumes: ["Soleil Absolu", "Santal Céleste"]
  }
];

const heartNotes = [
  {
    name: "Florentine Iris Concrete",
    origin: "Florence, Italy",
    description: "Aged underground for 3 years to extract creamy, violet-like powderiness.",
    image: "/images/lunore_user_soul_cafe.jpg",
    rarity: "Priced Higher than Solid Gold",
    matchedPerfumes: ["L'Or Absolu", "Santal Céleste"]
  },
  {
    name: "Damask Rose Absolute",
    origin: "Kazanlak, Bulgaria",
    description: "Velvety, dark red rose petals steeped in copper stills for deep romantic luxury.",
    image: "/images/lunore_user_rose_wood.jpg",
    rarity: "4,000kg Petals per 1kg Absolute",
    matchedPerfumes: ["Rose Impériale", "Nuit d'Or"]
  },
  {
    name: "Dark Cocoa Absolute",
    origin: "Criollo Estate, Venezuela",
    description: "Roasted Venezuelan Criollo cacao pods emitting dark bittersweet warmth.",
    image: "/images/lunore_user_handbag.jpg",
    rarity: "Single Estate Artisanal",
    matchedPerfumes: ["Nuit d'Or", "L'Or Absolu"]
  },
  {
    name: "Grasse Centifolia Rose",
    origin: "Maison LUNORÉ Fields, France",
    description: "The crown jewel of French perfumery—unrivalled honeyed rose warmth.",
    image: "/images/lunore_user_rose_wood.jpg",
    rarity: "Private Harvest Sanctuary",
    matchedPerfumes: ["Rose Impériale"]
  }
];

const baseNotes = [
  {
    name: "Royal Cambodian Oud",
    origin: "Koh Kong, Cambodia",
    description: "Wild agarwood resin aged in subterranean barrels for deep balsamic mystery.",
    image: "/images/lunore_user_soul_cafe.jpg",
    rarity: "Wild Sustainable Reserve",
    matchedPerfumes: ["L'Or Absolu", "Ambre Nocturne"]
  },
  {
    name: "Australian Sandalwood",
    origin: "Kalgoorlie, Australia",
    description: "Creamy, milky sandalwood heartwood aged 30 years before distillation.",
    image: "/images/lunore_user_weekend_escape.jpg",
    rarity: "FSC Certified Sanctuary",
    matchedPerfumes: ["Santal Céleste", "L'Or Absolu"]
  },
  {
    name: "Golden Amber Resin",
    origin: "Socotra, Yemen",
    description: "Fossilized tree resins blended with labdanum tears and Madagascar vanilla.",
    image: "/images/lunore_user_handbag.jpg",
    rarity: "Ancient Resin Reserve",
    matchedPerfumes: ["Nuit d'Or", "Ambre Nocturne"]
  },
  {
    name: "Bourbon Vanilla Pods",
    origin: "Sava Region, Madagascar",
    description: "Hand-pollinated black vanilla pods cured under tropical sunlight.",
    image: "/images/lunore_user_car_bonnet.jpg",
    rarity: "Grand Cru Grade A",
    matchedPerfumes: ["L'Or Absolu", "Nuit d'Or"]
  }
];

export const INGREDIENT_NOTES = {
  "Top Notes": topNotes,
  "Heart Notes": heartNotes,
  "Base Notes": baseNotes,
  top: topNotes,
  heart: heartNotes,
  base: baseNotes
};

export const FRAGRANCE_NOTES = INGREDIENT_NOTES;
