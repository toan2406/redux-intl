export default (...funcs) => value =>
  funcs.reduce((result, func) => func(result), value);
