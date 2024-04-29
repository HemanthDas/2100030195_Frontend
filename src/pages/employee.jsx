const Employee = () => {
  return (
    <div id="employee">
      <div>
        <button>Add</button>
      </div>
      <div className="table">
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
      </div>
      <div></div>
    </div>
  );
};
export default Employee;
