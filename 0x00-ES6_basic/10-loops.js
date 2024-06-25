/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-const-assign */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
	  value = appendString + value;
  }

  return array;
}
