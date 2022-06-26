export const drawImageWithFilters = (img, filter) => new Promise((resolve, reject) => {
  const { dataURL, type } = img;
  const offscreenImg = new Image();
  const offscreenCanvas = document.createElement('canvas');
  const ctx = offscreenCanvas.getContext('2d');

  offscreenImg.onload = function onload() {
    offscreenCanvas.width = offscreenImg.width;
    offscreenCanvas.height = offscreenImg.height;
    ctx.filter = filter;

    ctx.drawImage(offscreenImg, 0, 0);

    resolve(offscreenCanvas.toDataURL(type));
  };
  offscreenImg.onerror = (e) => reject(e);

  offscreenImg.src = dataURL;
});

export const triggerDownload = (img) => {
  const link = document.createElement('a');
  link.download = `${img.name}`;
  link.href = img.dataURL;

  link.click();
};
