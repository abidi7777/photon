import { FILTER_TYPES } from './Filter.constants';

export const toCSSFilterString = (filterObj) => Object
  .keys(filterObj)
  .reduce((str, attr) => `${str} ${attr}(${filterObj[attr]}${FILTER_TYPES[attr]?.unit})`, '');

export const isValidCSS = (prop, value) => {
  const { style } = new Option();

  style[prop] = value;

  return Boolean(style[prop]);
};
