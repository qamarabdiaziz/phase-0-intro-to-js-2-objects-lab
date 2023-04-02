// Write your solution in this file!
const employee = { name: 'Sam' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object with the original key value pairs and the new key value pair
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Update the employee object with the new key value pair and return the updated employee
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a new object without the specified key and return it
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Delete the specified key from the employee object and return the updated employee
  delete employee[key];
  return employee;
}
