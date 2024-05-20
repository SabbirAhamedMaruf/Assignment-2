export type Color = string[];
export type Size = string[];
export type Style = string[];

export type Variants = {
  variants: Color | Size | Style;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Products = {
  name: string;
  description: string;
  price: number;
  catagory: string;
  tags: string[];
  variants: Variants;
  inventory: Inventory;
};
