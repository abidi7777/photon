export const compressImageOptions = Object.freeze({
  maxSizeMB: 0.8,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
});

export const ALLOWED_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'gif']);
