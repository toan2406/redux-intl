const omitBy = omitFn => object =>
  Object.keys(object).reduce((result, key) => {
    if (!omitFn(object[key])) result[key] = object[key];
    return result;
  }, {});

export default omitBy;
