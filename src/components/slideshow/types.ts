export interface SlideData {
  thumbnail: string;
  thumbnailAlt: string;
  background: string;
  backgroundAlt: string;
  cutout?: string;
  cutoutAlt?: string;
  headline: string;
  title: string;
  overline: string;
  paragraph: string;
  button: string;
  buttonLink: string;
}

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  slide: SlideData;
  slideLength: number;
  activeId: number;
  isHidden?: boolean;
  style: React.CSSProperties;
}

export interface SlideImageProps {
  bg?: string;
  cutout?: string;
  cutoutAlt?: string;
  bgAlt: string;
  isHidden?: boolean;
  background: string;
}

export interface ThumbnailsProps {
  handleThumbClick: (index: number) => void;
  index: number;
  src: string;
  activeId: number;
  alt: string;
}
