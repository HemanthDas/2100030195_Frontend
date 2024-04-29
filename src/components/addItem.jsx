import data from "../assets/employees";
import PropTypes from "prop-types";
const AddItem = ({ newData }) => {
  const onAdd = () => {
    console.log(newData);
    data.push(newData);
    console.log(data);
  };

  return <button onClick={onAdd}>ADD</button>;
};
AddItem.propTypes = {
  newData: PropTypes.object.isRequired,
};
export default AddItem;
