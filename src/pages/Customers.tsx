import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback } from "react";
import { useState } from "react";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa6";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  { Header: "Avatar", accessor: "avatar" },
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];
const img =
  "https://plus.unsplash.com/premium_photo-1687089575981-609459d5a840?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 =
  "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Irshad Mohammed",
    email: "Irshad.Mohammed@example.com",
    gender: "Male",
    role: "Admin",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "sydney sweeney",
    email: "iamsydney@example.com",
    gender: "Female",
    role: "User",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const customer = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Customers"),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default customer;
