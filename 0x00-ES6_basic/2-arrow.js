/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
	  this.sanFranciscoNeighborhoods.push(newNeighborhood);
	  return this.sanFranciscoNeighborhoods;
  };
}
