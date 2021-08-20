type MinimalLink = {
  name: string;
  url: string;
};

type Sprites = {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: unknown;
    "official-artwork": unknown;
  };
  versions: {
    "generation-i": {
      "red-blue": unknown;
      yellow: unknown;
    };
    "generation-ii": {
      crystal: unknown;
      gold: unknown;
      silver: unknown;
    };
    "generation-iii": {
      emerald: unknown;
      "firered-leafgreen": unknown;
      "ruby-sapphire": unknown;
    };
    "generation-iv": {
      "diamond-pearl": unknown;
      "heartgold-soulsilver": unknown;
      platinum: unknown;
    };
    "generation-v": {
      "black-white": unknown;
    };
    "generation-vi": {
      "omegaruby-alphsapphire": unknown;
      "x-y": unknown;
    };
    "generation-vii": {
      icons: unknown;
      "ultra-sun-ultra-moon": unknown;
    };
    "generation-viii": {
      icons: unknown;
    };
  };
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: MinimalLink;
  }[];
  forms: MinimalLink[];
  game_indices: {
    game_index: number;
    version: MinimalLink;
  }[];
  held_items: {
    item: MinimalLink;
    version_details: {
      rarity: number;
      version: MinimalLink;
    };
  }[];
  location_area_encounters: string;
  moves: {
    move: MinimalLink;
    version_group_details: {
      level_learned_at: number;
      version_group: MinimalLink;
      move_learn_method: MinimalLink;
    }[];
  }[];
  species: MinimalLink;
  sprites: Sprites;
  stats: {
    base_stat: number;
    effort: number;
    stat: MinimalLink;
  };
  types: {
    slot: number;
    type: MinimalLink;
  };
};

export type PokemonPageResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};
