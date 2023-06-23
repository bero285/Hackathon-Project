import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import Main from "./Components/Main/Main";
import Transaction from "./Components/Transactions/Transaction";
import StatsPage from "./Components/Stats/StatsPage";
import ProposalContainer from "./Components/Proposal/ProposalContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Main />} />
      <Route path="/Transactions" element={<Transaction />} />
      <Route path={"/Stats/:id"} element={<StatsPage />} />
      <Route path={"/proposals"} element={<ProposalContainer />} />
    </Routes>
  );
}

export default App;
