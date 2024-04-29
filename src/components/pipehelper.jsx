import PropTypes from "prop-types";
const PipeHelper = ({ employee }) => {
  const position = employee.age >= 40 ? "Senior" : "Junior";
  const salary =
    (employee.age >= 40 ? employee.age * 10 : employee.age * 5) + 50000;
  return (
    <>
      <td>{position}</td>
      <td>{salary}</td>
    </>
  );
};
PipeHelper.propTypes = {
  employee: PropTypes.object.isRequired,
};
export default PipeHelper;
