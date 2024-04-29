import data from "../assets/employees";
const deleteItem = ({ id }) => {
  const onDelete = () => {
    data.splice(id, 1);
  };

  return <button onClick={onDelete}>DELETE</button>;
};

export default deleteItem;
