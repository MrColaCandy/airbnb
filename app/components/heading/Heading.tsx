import React from "react";

interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
}
const Heading = ({ title, subtitle, center }: Props) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-light text-neutral-500 ml-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
