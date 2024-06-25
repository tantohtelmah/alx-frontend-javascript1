/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
	  [departmentName]: employees,
  };
  return employeesObject;
}
