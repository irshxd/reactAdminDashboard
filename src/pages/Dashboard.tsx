import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa6";
import userImg from "../assests/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assests/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import { Doughnut } from "react-chartjs-2";
import Table from "../components/DashboardTable";

const dashboard = () => {
  return (
    <div className="adminContainer">
      {/* siderbar */}
      <AdminSidebar />
      {/* main body */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, docs, users" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        {/* revenue */}
        <section className="widgetContainer">
          <WidgetItem
            percent={60}
            amount={true}
            value={6969}
            heading="revenue"
            color="rgb(0,38,123)"
          />
          {/* users */}
          <WidgetItem
            percent={-69}
            value={100}
            heading="Users"
            color="rgb(0,138,123)"
          />
          {/* Transactions */}
          <WidgetItem
            percent={40}
            value={40}
            heading="Transactions"
            color="rgb(10,108,223)"
          />
          {/* products */}
          <WidgetItem
            percent={10}
            value={120}
            heading="Products"
            color="rgb(120,100,153)"
          />
        </section>
        {/* graph sec */}
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue and Transactions</h2>
            <BarChart
              data1={[200, 300, 400, 100, 130, 20]}
              data2={[100, 300, 384, 249, 150, 10]}
              title1="Revenue"
              title2="Transactions"
              bg_color1="rgb(0, 38, 123)"
              bg_color2="rgb(10, 108, 223)"
            />
          </div>
          <div className="productCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <ProductCategoryItem
                  key={i.heading + 2}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* chart and table */}
        <section className="transactionContainer">
          <div className="userChart">
            <h2>User ratio</h2>
            <DoughnutChart
              labels={["Male", "Female"]}
              data={[66, 34]}
              backgroundColor={["brown", "dark-brown"]}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

// for dashboard widget info

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp />+{percent}%{" "}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown />
            {percent}%{" "}
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255,255,255)0
        )`,
        }}
      >
        <span style={{ color }}> {percent}% </span>
      </div>
    </article>
  );
};
// for product sidebar widget info
interface ProductCategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const ProductCategoryItem = ({
  color,
  value,
  heading,
}: ProductCategoryItemProps) => {
  return (
    <div className="categoryItem">
      <h4>{heading}</h4>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default dashboard;
