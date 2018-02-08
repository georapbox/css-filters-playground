export default filters => `blur(${filters.blur}px)
  contrast(${filters.contrast}%)
  grayscale(${filters.grayscale}%)
  sepia(${filters.sepia}%)
  hue-rotate(${filters['hue-rotate']}deg)
  brightness(${filters.brightness}%)
  invert(${filters.invert}%)
  opacity(${filters.opacity}%)
  saturate(${filters.saturate}%)`;
