import property from "../property";

const baseSum = (array, iteratee) => {
  let result = 0;

  for (const value of array) {
    const current = typeof iteratee === "string" ? property(value, iteratee) : iteratee(value);
    if (current !== undefined) {
      result += current;
    }
  }

  return result;
};

export default baseSum;
