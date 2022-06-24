import compressImage from 'browser-image-compression';
import isImageQualityAboveFullHD from './isImageQualityAboveFullHD';
import isValidImage from './isValidImage';

const compressImageOptions = Object.freeze({
  maxSizeMB: 0.7,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
});

export default async function createImageDataUrl(img) {
  if (!isValidImage(img.name)) {
    throw new Error('Doesn\'t seem like a valid Image');
  }

  const imgDataURL = URL.createObjectURL(img);
  const shouldCompress = await isImageQualityAboveFullHD(imgDataURL);

  if (shouldCompress) {
    const compressedImgDataURL = await compressImage(img, compressImageOptions);

    return URL.createObjectURL(compressedImgDataURL);
  }

  return imgDataURL;
}
