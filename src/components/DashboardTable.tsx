import TableHOC from "./TableHOC";
import { Column } from "react-table";

const columns: Column<DataType>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
];
interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}
const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transactionBox",
    "Top Transaction"
  )();
};

export default DashboardTable;
