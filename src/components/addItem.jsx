import data from "../assets/employees";
import PropTypes from "prop-types";
import { useNavigate } from "@tanstack/react-router";
const AddItem = ({ newData }) => {
  const navigate = useNavigate();
  const onAdd = () => {
    console.log(newData);
    data.push(newData);
    console.log(data);
    navigate({ to: "/employee" });
  };

  return <button onClick={onAdd}>ADD</button>;
};
AddItem.propTypes = {
  newData: PropTypes.object.isRequired,
};
export default AddItem;
