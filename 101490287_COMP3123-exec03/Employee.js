

const employees = [
  { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
  { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000 },
  { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500 },
  { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000 }
];

function getAllEmployees() {
  return employees;
}

function getEmployeeNamesAsc() {
  return employees
    .map(e => `${e.firstName} ${e.lastName}`)
    .sort((a, b) => a.localeCompare(b));
}

function getTotalSalary() {
  return employees.reduce((sum, e) => sum + (Number(e.salary) || 0), 0);
}

module.exports = {
  getAllEmployees,
  getEmployeeNamesAsc,
  getTotalSalary,
};
