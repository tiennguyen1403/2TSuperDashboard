import baseSum from "./internal/baseSum";

const NAN = 0 / 0;

const meanBy = (array, iteratee) => {
  const length = array == null ? 0 : array.length;
  return length ? baseSum(array, iteratee) / length : NAN;
};

export default meanBy;
