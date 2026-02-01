import React from "react";

type Props = {
  description: string;
  keywords: string;
  title: string;
};

const Metadata: React.FC<Props> = ({ description, keywords, title }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </>
);

export default Metadata;
