import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import employeData from "../assets/employees.json";
import PipeHelper from "../components/pipehelper.jsx";

const Employee = () => {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || employeData
  );
  useEffect(() => {
    if (localStorage.getItem("employees") === null)
      localStorage.setItem("employees", JSON.stringify(employeData));
  }, []);
  const handleDelete = (id) => {
    return () => {
      const newEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(newEmployees);
      localStorage.setItem("employees", JSON.stringify(newEmployees));
    };
  };
  return (
    <div id="employee">
      <Link to="/add">Add Employee</Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.department}</td>
              <PipeHelper employee={employee} />
              <td>
                <button>
                  <Link to={`/edit/${employee.id}`}>EDIT</Link>
                </button>
                <button onClick={handleDelete(employee.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
};
export default Employee;
