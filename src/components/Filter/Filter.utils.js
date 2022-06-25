import { FILTER_TYPES } from './Filter.constants';

// eslint-disable-next-line import/prefer-default-export
export const toCSSFilterString = (filterObj) => Object
  .keys(filterObj)
  .reduce((str, attr) => `${str} ${attr}(${filterObj[attr]}${FILTER_TYPES[attr]?.unit})`, '');
