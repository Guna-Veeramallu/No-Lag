import React from "react";
import DashboardLeftNav from "./DashboardLeftNav";
import DashboardRight from "./DashboardRight";
// import "../../../styles/homepage.css";

export default function DashboardMain() {

  return (
   <>
    <div>
        <div>
            <DashboardLeftNav />
        </div>
        <div>
            <DashboardRight />
        </div>
    </div>
   </>
  );
}
