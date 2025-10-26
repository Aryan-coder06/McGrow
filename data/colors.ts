
export type ColorFamily = 'Neutral' | 'Pastel' | 'Bold' | 'Metallic';
export type ColorFinish = 'Matte' | 'Satin' | 'Gloss' | 'Semi-Gloss';

export interface PaintColor {
  id: string;
  name: string;
  hex: string;
  family: ColorFamily;
  finish: ColorFinish;
  mood: string;
  room: 'Interior' | 'Exterior' | 'Both';
}

export const PAINT_COLORS: PaintColor[] = [
  // Neutrals (Purple-friendly)
  { id: 'c01', name: 'Lavender Mist', hex: '#E0E0F8', family: 'Neutral', finish: 'Matte', mood: 'Calm', room: 'Interior' },
  { id: 'c02', name: 'Cloud Gray', hex: '#D1D7E0', family: 'Neutral', finish: 'Matte', mood: 'Modern', room: 'Both' },
  { id: 'c03', name: 'Whisper White', hex: '#F8F8FF', family: 'Neutral', finish: 'Satin', mood: 'Clean', room: 'Interior' },
  { id: 'c04', name: 'Taupe Silk', hex: '#A8A3A8', family: 'Neutral', finish: 'Matte', mood: 'Warm', room: 'Interior' },
  { id: 'c05', name: 'Deep Clay', hex: '#776E6E', family: 'Neutral', finish: 'Satin', mood: 'Grounded', room: 'Exterior' },

  // Pastels (Cool Tones)
  { id: 'c06', name: 'Wisteria Bloom', hex: '#C3A9D7', family: 'Pastel', finish: 'Matte', mood: 'Feminine', room: 'Interior' },
  { id: 'c07', name: 'Mint Dream', hex: '#B8EAD1', family: 'Pastel', finish: 'Gloss', mood: 'Fresh', room: 'Interior' },
  { id: 'c08', name: 'Sky Blue', hex: '#A9D7E3', family: 'Pastel', finish: 'Semi-Gloss', mood: 'Relaxing', room: 'Both' },
  { id: 'c09', name: 'Blush Pink', hex: '#F0D4E0', family: 'Pastel', finish: 'Satin', mood: 'Soft', room: 'Interior' },
  { id: 'c10', name: 'Pale Lilac', hex: '#D7B4DF', family: 'Pastel', finish: 'Matte', mood: 'Gentle', room: 'Interior' },

  // Bolds (Vibrant Magenta/Purple Focus)
  { id: 'c11', name: 'Royal Violet', hex: '#4B0082', family: 'Bold', finish: 'Gloss', mood: 'Dramatic', room: 'Interior' },
  { id: 'c12', name: 'Fuchsia Flash', hex: '#DD3399', family: 'Bold', finish: 'Gloss', mood: 'Energetic', room: 'Exterior' },
  { id: 'c13', name: 'Teal Depth', hex: '#008080', family: 'Bold', finish: 'Satin', mood: 'Luxe', room: 'Both' },
  { id: 'c14', name: 'Electric Blue', hex: '#4C6CDA', family: 'Bold', finish: 'Semi-Gloss', mood: 'Vibrant', room: 'Exterior' },
  { id: 'c15', name: 'Hunter Green', hex: '#355E3B', family: 'Bold', finish: 'Matte', mood: 'Rich', room: 'Interior' },

  // Metallics (Represented by finishes/names)
  { id: 'c16', name: 'Silver Streak', hex: '#C0C0C0', family: 'Metallic', finish: 'Gloss', mood: 'Industrial', room: 'Interior' },
  { id: 'c17', name: 'Copper Glow', hex: '#B87333', family: 'Metallic', finish: 'Gloss', mood: 'Earthy', room: 'Interior' },
  { id: 'c18', name: 'Onyx Black', hex: '#1C1C1C', family: 'Bold', finish: 'Matte', mood: 'Sleek', room: 'Both' },
  { id: 'c19', name: 'Sunbeam Yellow', hex: '#FFD700', family: 'Bold', finish: 'Satin', mood: 'Joyful', room: 'Exterior' },
  { id: 'c20', name: 'Deep Ruby', hex: '#8C0020', family: 'Bold', finish: 'Gloss', mood: 'Intense', room: 'Interior' },
  
  // Additional Mixes
  { id: 'c21', name: 'Morning Dew', hex: '#D0F0C0', family: 'Pastel', finish: 'Matte', mood: 'Refreshing', room: 'Exterior' },
  { id: 'c22', name: 'Indigo Night', hex: '#4B0082', family: 'Bold', finish: 'Satin', mood: 'Mysterious', room: 'Interior' },
  { id: 'c23', name: 'Sand Dune', hex: '#FAD6A5', family: 'Neutral', finish: 'Matte', mood: 'Natural', room: 'Both' },
  { id: 'c24', name: 'Plum Wine', hex: '#652D90', family: 'Bold', finish: 'Semi-Gloss', mood: 'Elegant', room: 'Interior' },
  { id: 'c25', name: 'Aqua Sparkle', hex: '#00FFFF', family: 'Bold', finish: 'Gloss', mood: 'Playful', room: 'Exterior' },
  { id: 'c26', name: 'Stone Grey', hex: '#6D6D6D', family: 'Neutral', finish: 'Matte', mood: 'Classic', room: 'Both' },
  { id: 'c27', name: 'Coral Reef', hex: '#FF7F50', family: 'Bold', finish: 'Satin', mood: 'Tropical', room: 'Exterior' },
  { id: 'c28', name: 'Pearl White', hex: '#F0F2F5', family: 'Neutral', finish: 'Semi-Gloss', mood: 'Bright', room: 'Interior' },
  { id: 'c29', name: 'Forest Path', hex: '#395E3F', family: 'Bold', finish: 'Matte', mood: 'Cozy', room: 'Interior' },
  { id: 'c30', name: 'Lavender Haze', hex: '#C8A2C8', family: 'Pastel', finish: 'Gloss', mood: 'Dreamy', room: 'Interior' },
];
