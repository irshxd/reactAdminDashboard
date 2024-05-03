import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  { Header: "User", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];
const arr: DataType[] = [
  {
    user: "Irshad Mohammed",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/Transactions/mage">Manage</Link>,
  },
  {
    user: "Sydney Sweeney",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/Transactions/mange">Manage</Link>,
  },
  {
    user: "jennifer lawrence",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/Transactions/mnage">Manage</Link>,
  },
];
const Transactions = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Transactions"),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transactions;
