export default function taskBlock(trueOrFalse) {
	let task = false; // Use 'let' instead of 'var'
	let task2 = true; // Use 'let' instead of 'var'
  
	if (trueOrFalse) {
	  // These variables won't overwrite the outer ones
	  let task = true;
	  let task2 = false;
	}
  
	return [task, task2];
  }
  
