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
          First Name:
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            onChange={(e) => {
              setData({ ...data, age: e.target.value });
            }}
          />
        </label>
        <label>
          Gender
          <select
            onChange={(e) => {
              setData({ ...data, gender: e.target.value });
            }}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Department:
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, department: e.target.value });
            }}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            onChange={(e) => {
              setData({ ...data, position: e.target.value });
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
