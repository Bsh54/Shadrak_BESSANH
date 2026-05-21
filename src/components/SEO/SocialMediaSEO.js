import React from "react";
import { Helmet } from "react-helmet";

export const SocialMediaSEO = ({
  title,
  description,
  image,
  url,
  twitterHandle = "@shadrakbessanh",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Open Graph - Facebook, LinkedIn, Pinterest */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BESSANH Shadrak Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* LinkedIn */}
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />

      {/* Pinterest */}
      <meta property="pinterest:description" content={description} />
      <meta property="pinterest:media" content={image} />
    </Helmet>
  );
};

export default SocialMediaSEO;
