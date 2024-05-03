import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data1={[200, 300, 400, 100, 130, 20]}
            data2={[100, 300, 384, 249, 150, 10]}
            title1="Products"
            title2="Users"
            bg_color1="rgb(100, 38, 123)"
            bg_color2="rgb(50, 108, 203)"
          />
        </section>
        <section>
          <h2>Best selling products </h2>
          <BarChart
            horizontal={true}
            data1={[200, 100, 200, 100, 130, 20]}
            data2={[]}
            title1="Products"
            title2=""
            bg_color1="rgb(100, 38, 13)"
            bg_color2=""
          />
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
