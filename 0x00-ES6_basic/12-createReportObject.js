/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
export default function createReportObject(employeesList) {
  return {
	  allEmployees: {
      ...employeesList,
	  },
	  getNumberOfDepartments() {
      return Object.keys(employeesList).length;
	  },
  };
}
