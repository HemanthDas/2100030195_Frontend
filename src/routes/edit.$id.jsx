import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import EditItem from "../components/editItem";
export const Route = createFileRoute("/edit/$id")({
  component: Edit,
});
export default function Edit() {
  const param = Route.useParams();
  const data = JSON.parse(localStorage.getItem("employees"));
  const employee = data.find((item) => item.id === Number(param.id));
  const [newData, setNewData] = useState(employee);
  console.log(employee);
  return (
    <div id="edit">
      <h1>Edit Employee</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          First Name:{" "}
          <input
            type="text"
            defaultValue={employee.firstName}
            onChange={(e) => {
              setNewData({ ...newData, firstName: e.target.value });
            }}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            defaultValue={employee.lastName}
            onChange={(e) => {
              setNewData({ ...newData, lastName: e.target.value });
            }}
          />
        </label>
        <label>
          Age:{" "}
          <input
            type="number"
            defaultValue={employee.age}
            onChange={(e) => {
              setNewData({ ...newData, age: e.target.value });
            }}
          />
        </label>
        <label>
          Department:{" "}
          <input
            type="text"
            defaultValue={employee.department}
            onChange={(e) => {
              newData({ ...newData, department: e.target.value });
            }}
          />
        </label>
        <EditItem employee={newData} />
      </form>
    </div>
  );
}
