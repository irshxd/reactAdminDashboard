import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { BiMaleFemale } from "react-icons/bi";
import { DoughnutChart } from "../../components/Charts";

const pieCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />{" "}
      <section className="chart-container-pie">
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
      </section>
    </div>
  );
};

export default pieCharts;
