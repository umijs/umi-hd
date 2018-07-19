'use strict';

/**
 * @param {Number} [baseFontSize = 100] - 基础fontSize, 默认50px, 对于iPhone的设计稿, 1rem=100px; 方便裸算rem; 有的是16px, 用浏览器默认;
 * @param {Number} [psdWidth = 750] - 设计稿默认宽度, 以750为基准;
 */
const win = window;
export default win.vl = (baseFontSize, psdWidth) => {
  const _baseFontSize = baseFontSize || 100;
  const _psdWidth = psdWidth || 750;

  const doc = win.document;
  const ua = navigator.userAgent;
  const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
  const UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
  const isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80;
  const docEl = doc.documentElement;
  let rate = 1;
  if (matches && matches[1] > 534 || isUCHd) {
    // 有些兼容环境下, fontSize为100px的时候, 结果1rem=86px; 需要纠正viewport;
    docEl.style.fontSize = `${_baseFontSize}px`;
    const div = doc.createElement('div');
    div.setAttribute('style', 'width: 1rem;display:none');
    docEl.appendChild(div);
    const trueWidth = win.getComputedStyle(div).width;
    docEl.removeChild(div);
    // 如果1rem的真实px跟html.fontSize不符. 那么就要加一个rate缩放了;
    if (trueWidth !== docEl.style.fontSize) {
      const trueWidthVal = parseInt(trueWidth, 10);
      rate = _baseFontSize / trueWidthVal;
    }
  }

  let metaEl = doc.querySelector('meta[name="viewport"]');
  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    doc.head.appendChild(metaEl);
  }
  metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1');

  // width/750*100, 为了统一rem为0.01rem = 1px
  const setFontSize = () => {
    docEl.style.fontSize = `${_baseFontSize / _psdWidth * docEl.clientWidth * rate}px`;
  };
  setFontSize();
  win.addEventListener('resize', setFontSize);
};
