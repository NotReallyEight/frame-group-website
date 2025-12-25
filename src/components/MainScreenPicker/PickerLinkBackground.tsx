import Image from "next/image";

type Props = {
  alt: string;
  src: string;
};

export const PickerLinkBackground = ({ alt, src }: Props) => (
  <Image alt={alt} src={src} fill className="object-cover" />
);
