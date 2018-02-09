export default filters => `blur(${filters.blur}px)
  contrast(${filters.contrast}%)
  grayscale(${filters.grayscale}%)
  sepia(${filters.sepia}%)
  hue-rotate(${filters.hueRotate}deg)
  brightness(${filters.brightness}%)
  invert(${filters.invert}%)
  opacity(${filters.opacity}%)
  saturate(${filters.saturate}%)
  drop-shadow(${filters.dropShadowOffsetX}px ${filters.dropShadowOffsetY}px ${filters.dropShadowBlurRadius}px ${filters.dropShadowColor})`;
