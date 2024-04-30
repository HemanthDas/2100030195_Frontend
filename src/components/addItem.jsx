import data from "../assets/employees.json";
import PropTypes from "prop-types";
import { useNavigate } from "@tanstack/react-router";
const AddItem = ({ newData }) => {
  const navigate = useNavigate();
  const onAdd = () => {
    if (Object.keys(newData).length < 4) {
      alert("Please fill in all fields");
      return;
    }
    let gender = "";
    if (newData.gender === 0) {
      gender = "Female";
    } else if (newData.gender === 1) {
      gender = "Male";
    } else {
      gender = "Other";
    }

    newData.id = data.length + 1;
    newData.gender = gender;
    data.push(newData);
    localStorage.setItem("employees", JSON.stringify(data));
    navigate({ to: "/employee" });
  };

  return <button onClick={onAdd}>ADD</button>;
};
AddItem.propTypes = {
  newData: PropTypes.object.isRequired,
};
export default AddItem;
