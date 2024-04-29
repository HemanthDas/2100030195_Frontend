import { Link } from "@tanstack/react-router";

const Employee = () => {
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
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div></div>
    </div>
  );
};
export default Employee;
