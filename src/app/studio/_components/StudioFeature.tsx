import { FC } from "react";

type Props = {
  text: string;
};

const StudioFeature: FC<Props> = ({ text }) => (
  <div
    className="
      flex flex-row
      space-x-4
      items-center
    "
  >
    <div className="w-1 h-1 bg-text-secondary rounded-[50%]" />
    <div className="font-family-regular-md">{text}</div>
  </div>
);

export default StudioFeature;
