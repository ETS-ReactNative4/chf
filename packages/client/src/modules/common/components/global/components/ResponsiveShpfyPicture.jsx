import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveShpfyPicture = ({ options }) => {
  // console.log('options', options);
  const imageSrc = src => {
    const regex = /(?:com.+\/)(?:(products|collections)\/)(:?.*?)$/gm;
    let m = regex.exec(src);
    // console.log('M:::', m[1], m[2]);
    return { image: m[2], path: m[1] };
  };
  imageSrc(options.image);
  return (
    <picture>
      {options.sources.map((option, i) => {
        return (
          <source
            key={`${options.altText}-${i}`}
            srcSet={
              __DEV__
                ? options.image
                : `/shopify/${imageSrc(option.image).path}/${option.image_size}/${imageSrc(option.image).image}`
            }
            media={option.size}
          />
        );
      })}
      <img
        className={options.className}
        src={
          __DEV__
            ? options.image
            : `/shopify/${imageSrc(options.image).path}/${options.image_size}/${imageSrc(options.image).image}`
        }
        alt={options.altText}
      />
    </picture>
  );
};
ResponsiveShpfyPicture.propTypes = {
  options: PropTypes.object
};
export default ResponsiveShpfyPicture;
