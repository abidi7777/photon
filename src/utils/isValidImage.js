const ALLOWED_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'gif']);

export default function isValidImage(imagePath) {
  const ext = imagePath.slice(imagePath.lastIndexOf('.') + 1);

  return ALLOWED_EXTENSIONS.has(ext);
}
