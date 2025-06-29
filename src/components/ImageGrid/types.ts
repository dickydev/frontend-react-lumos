export type ImageItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export type ImageGridProps = {
  images: ImageItem[];
};
