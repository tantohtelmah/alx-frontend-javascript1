/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
export default function taskBlock(trueOrFalse) {
  const task = false; // Use 'let' instead of 'var'
  const task2 = true; // Use 'let' instead of 'var'

  if (trueOrFalse) {
	  // These variables won't overwrite the outer ones
  }

  return [task, task2];
}
