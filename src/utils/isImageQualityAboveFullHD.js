export default function isImageQualityAboveFullHD(imgDataURL) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imgDataURL;
    img.onload = () => resolve(img.width > 1920 || img.height > 1920);
    img.onerror = (e) => reject(e);
  });
}
