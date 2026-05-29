import React from "react";
import "../../styles/DashboardMain.css";
import SettingsPageRight from "./SettingsPageRight";
import SettingsPageLeftNav from "./SettingsPageLeftNav";

export default function SettingsPage() {

  return (
   <>
    <div className="DashboardSection SettingsSection">
        <div className="DashboardLeft">
           <SettingsPageLeftNav />
        </div>
        <div className="DashboardRight">
         <SettingsPageRight />
        </div>
    </div>
   </>
  );
}
