import { createLazyFileRoute } from "@tanstack/react-router";
import Employee from "../pages/employee";

export const Route = createLazyFileRoute("/employee")({
  component: () => <Employee />,
});
