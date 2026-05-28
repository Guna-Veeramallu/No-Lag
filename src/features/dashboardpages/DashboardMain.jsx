import React from "react";
import "../../styles/DashboardMain.css";
import DashboardLeftNav from "./DashboardLeftNav";
import DashboardRight from "./DashboardRight";

export default function DashboardMain() {

  return (
   <>
    <div className="DashboardSection">
        <div className="DashboardLeft">
           <DashboardLeftNav />
        </div>
        <div className="DashboardRight">
         <DashboardRight />
        </div>
    </div>
   </>
  );
}
