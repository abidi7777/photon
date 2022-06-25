import compressImage from 'browser-image-compression';

import { ALLOWED_EXTENSIONS, compressImageOptions } from './ImageForm.constants';

export const isImageQualityAboveFullHD = (imgDataURL) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = imgDataURL;
  img.onload = () => resolve(img.width > 1920 || img.height > 1920);
  img.onerror = (e) => reject(e);
});

export const isValidImage = (imagePath) => {
  const ext = imagePath.slice(imagePath.lastIndexOf('.') + 1);

  return ALLOWED_EXTENSIONS.has(ext);
};

export const createImageDataURL = async (img) => {
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
};
