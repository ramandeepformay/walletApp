import Appbar from "../Appbar";
import Balance from "../Balance";
import Users from "../Users";
import { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance label="10,000" />
      <Users />
    </div>
  );
};

export default Dashboard;
