import React, { useEffect, useState } from "react";
import SideNav from "../Main/SideNav";
import Chart from "../Main/Home/Charts/Days/Chart";
import WeekChart from "../Main/Home/Charts/Weeks/WeekChart";
import StatsData from "./StatsData";
import MonthChart from "../Main/Home/Charts/Month/MonthChart";
import WeeksSug from "./Suggestions/WeeksSug";
import DaysSug from "./Suggestions/DaysSug";
import MonthSug from "./Suggestions/MonthSug";

const StatsPage = () => {
  const [stats, setStats] = useState(StatsData);
  const [loading, setLoading] = useState(false);
  const [timeState, setTimeState] = useState("week");
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch("/Stats/19");
        const json = await response.json();
        // setStats(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="text-4xl flex justify-center items-center">Loading</div>
    );
  }
  const handleOptionChange = (event) => {
    setTimeState(event.target.value);
  };
  return (
    <div className="bg-[#EBECEE] min-h-screen flex flex-row">
      <div className="w-[10%]">
        <SideNav />
      </div>
      <div className="flex flex-row w-[100%] ">
        <div className="pl-5">
          <div className="flex flex-col items-center justify-start">
            <div className="flex mt-10 items-center flex-col ">
              <h1>Daily statistic</h1>
              <Chart />
            </div>

            <div className="flex mt-10 items-center flex-col ">
              <h1>Weekly statistic</h1>
              <WeekChart />
            </div>

            <div className="flex mt-10 items-center flex-col ">
              <h1>Monthly statistic</h1>
              <MonthChart />
            </div>
          </div>
        </div>

        <div className="w-[40%] mx-20  mt-10  shadow-xl bg-slate-150 rounded-lg">
          <div className="flex flex-col items-center w-full h-full">
            <div>
              <select
                className="px-10 py-2 text-lg rounded-lg mt-2"
                onChange={handleOptionChange}
              >
                {/* <option value="day"> Day </option> */}
                <option value="week"> Week </option>
                <option value="month"> Month </option>
              </select>
            </div>
            {/* {timeState === "day" ? <DaysSug /> : null} */}
            {timeState === "week" ? <WeeksSug /> : null}
            {timeState === "month" ? <MonthSug /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
// MAPPING DATABASES
// {stats[0].days.length > 0 && (
//   <>
//     {/* Iterate over the days */}
//     {stats[0].days.map((day, index) => {
//       const dayKey = Object.keys(day)[0];
//       const { Income, Outcome } = day[dayKey];
//       return (
//         <div key={index}>
//           <p>{dayKey}</p>
//           <p>Income: {Income}</p>
//           <p>Outcome: {Outcome}</p>
//         </div>
//       );
//     })}
//   </>
// )}
