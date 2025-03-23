interface ImageSizes {
  desktop: string;
}

export interface Dessert {
  image: ImageSizes;
  name: string;
  category: string;
  price: number;
  id: number;
  quantity?: number;
}
