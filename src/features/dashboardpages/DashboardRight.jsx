import React from "react";
import DashboardRghtTopNavBar from "./DashboardRghtTopNavBar";
// import GuestPage from "./GuestPage";
// import ShopsPage from "./ShopsPage";
// import DasboardPage from "./DashboardPage";
import SettingsPage from "./SettingsPage";
// import OrderPage from "./OrderPage";
// import CouponsPage from "./CouponsPage";
// import CampaignsPage from "./CampaignsPage";

export default function DashboardRight() {

  return (
   <div>
    <div>
        <DashboardRghtTopNavBar />
    </div>
    <div>
        {/* <DasboardPage /> */}
        {/* <GuestPage /> */}
        {/* <ShopsPage /> */}
        {/* <OrderPage /> */}
        {/* <CouponsPage /> */}
        {/* <CampaignsPage /> */}
        <SettingsPage />
    </div>
   </div>
  );
}
