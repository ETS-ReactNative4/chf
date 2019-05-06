import React from 'react';
import PropTypes from 'prop-types';

const ResponsivePicture = ({ options }) => {
  // console.log('options', options);
  const imageSrc = src => {
    const regex = /(?:com)\/(?:chf-rcomm)(.*?)$/;
    let m = regex.exec(src);
    return m[1];
  };
  // imageSrc function returns image uri with leading slash so no need for slash after image_size option
  return (
    <picture>
      {options.sources.map((option, i) => {
        // console.log('OPTION FROM SOURCES::', option);

        return (
          <source
            key={`${options.altText}-${i}`}
            srcSet={__DEV__ ? options.image : `/img/${option.image_size}${imageSrc(option.image)}`}
            // sizes={option.sizes}
            media={option.size}
          />
        );
      })}
      <img
        className={options.className}
        src={__DEV__ ? options.image : `/img/${options.image_size}${imageSrc(options.image)}`}
        alt={options.altText}
      />
    </picture>
  );
};
ResponsivePicture.propTypes = {
  options: PropTypes.object
};
export default ResponsivePicture;

// export default class ResponsivePicture {
//   constructor(options) {
//     console.log('options', options);
//     this.sources = null;
//   }
//
//   renederImage = () => {};
// }
