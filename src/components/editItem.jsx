import data from "../assets/employees.json";
import PropTypes from "prop-types";
import { useNavigate } from "@tanstack/react-router";
const EditItem = ({ employee }) => {
  const navigate = useNavigate();
  const saveEdit = () => {
    const newData = data.map((item) => {
      if (item.id === employee.id) {
        return employee;
      }
      return item;
    });
    console.log(newData);
    localStorage.setItem("employees", JSON.stringify(newData));
    navigate({ to: "/employee" });
  };
  return <button onClick={saveEdit}>Save Edit</button>;
};
EditItem.propTypes = {
  employee: PropTypes.object,
};
export default EditItem;
