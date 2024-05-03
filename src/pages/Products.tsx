import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const img =
  "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const img2 =
  "https://plus.unsplash.com/premium_photo-1681702114246-ffe628203982?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface DataType {
  photo: ReactElement;
  name: string;
  price: string;
  stock: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  { Header: "Photo", accessor: "photo" },
  { Header: "Name", accessor: "name" },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Action", accessor: "action" },
];
const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Nike Air Jordan ",
    price: `$${499}`,
    stock: 3,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Nike Air Jordan ",
    price: `$${499}`,
    stock: 3,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Nike Air Jordan ",
    price: `$${499}`,
    stock: 3,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook air m2",
    price: `$${999}`,
    stock: 213,
    action: <Link to="/admin/Products/manage">Manage</Link>,
  },
];

const product = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      {/* main section */}
      <main>{Table()}</main>
      <Link to="/admin/Products/add" className="addProduct">
        <FaPlus />
      </Link>
    </div>
  );
};

export default product;
