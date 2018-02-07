export default filters => (
  Object.keys(filters).reduce((accum, key) => {
    if (key === 'blur') {
      accum += `blur(${filters[key]}px) `;
    }

    if (key === 'contrast') {
      accum += `contrast(${filters[key]}%) `;
    }

    if (key === 'grayscale') {
      accum += `grayscale(${filters[key]}%) `;
    }

    if (key === 'sepia') {
      accum += `sepia(${filters[key]}%) `;
    }

    if (key === 'hue-rotate') {
      accum += `hue-rotate(${filters[key]}deg) `;
    }

    if (key === 'brightness') {
      accum += `brightness(${filters[key]}%) `;
    }

    if (key === 'invert') {
      accum += `invert(${filters[key]}%) `;
    }

    if (key === 'opacity') {
      accum += `opacity(${filters[key]}%) `;
    }

    if (key === 'saturate') {
      accum += `saturate(${filters[key]}%) `;
    }

    return accum;
  }, '')
);
