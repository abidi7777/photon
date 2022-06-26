export const drawImageWithFilters = (img, filter) => new Promise((resolve, reject) => {
  const { dataURL } = img;
  const offscreenImg = new Image();
  const offscreenCanvas = document.createElement('canvas');
  const ctx = offscreenCanvas.getContext('2d');

  offscreenImg.onload = function onload() {
    offscreenCanvas.width = this.naturalWidth;
    offscreenCanvas.height = this.naturalHeight;
    ctx.filter = filter;

    ctx.drawImage(this, 0, 0, offscreenCanvas.width, offscreenCanvas.height);

    resolve(offscreenCanvas.toDataURL());
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
