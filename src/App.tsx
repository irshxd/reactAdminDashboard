import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/Extras/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/Extras/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/Extras/TransactionManagement")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/pieCharts"));
const LineCharts = lazy(() => import("./pages/charts/lineCharts"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Toss = lazy(() => import("./pages/apps/Toss"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/Products" element={<Products />} />
          <Route path="/admin/Transactions" element={<Transactions />} />
          <Route path="/admin/Customers" element={<Customers />} />
          {/* extras */}
          <Route path="/admin/Products/add" element={<NewProduct />} />
          <Route path="/admin/Products/:id" element={<ProductManagement />} />
          <Route
            path="/admin/Transactions/:id"
            element={<TransactionManagement />}
          />
          {/* charts */}
          <Route path="/admin/Charts/Bar" element={<BarCharts />} />
          <Route path="/admin/Charts/Pie" element={<PieCharts />} />
          <Route path="/admin/Charts/Line" element={<LineCharts />} />
          {/* Apps */}
          <Route path="/admin/Apps/Coupon" element={<Coupon />} />
          <Route path="/admin/Apps/Stopwatch" element={<Stopwatch />} />
          <Route path="/admin/Apps/Toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
