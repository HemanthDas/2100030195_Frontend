import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import AddItem from "../components/addItem";
const Add = () => {
  const [data, setData] = useState({});
  return (
    <div id="add">
      <h1>Add Employee</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          First Name:{" "}
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
          />
        </label>
        <label>
          Age:{" "}
          <input
            type="number"
            onChange={(e) => {
              setData({ ...data, age: e.target.value });
            }}
          />
        </label>
        <label>
          Gender:{" "}
          <select
            onChange={(e) => {
              setData({ ...data, gender: e.target.value });
            }}
          >
            <option value={1}>Male</option>
            <option value={0}>Female</option>
            <option value={2}>Other</option>
          </select>
        </label>
        <label>
          Department:{" "}
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, department: e.target.value });
            }}
          />
        </label>
        <AddItem newData={data} />
      </form>
    </div>
  );
};
export const Route = createLazyFileRoute("/add")({
  component: () => <Add />,
});
