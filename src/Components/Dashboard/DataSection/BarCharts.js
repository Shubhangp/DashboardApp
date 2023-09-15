import React from 'react';
import { useQuery } from 'react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarCharts = () => {
  const convertedData = [];

  const getData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return res.json();
  };
  // console.log(getData);

  const { data, error, isLoading } = useQuery("dayWiseData", getData);

  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div className='text-center my-5'>Loading Chart...</div>;

  for (const key in data.cases) {
    if (key in data.cases) {
      const entry = {
        keys: key,
        deaths: data.deaths[key],
        recovered: data.recovered[key],
      };
      convertedData.push(entry);
    }
  }
  var data2 = [convertedData[0], convertedData[1], convertedData[2], convertedData[3]];

  return (
    <div className="flex flex-col bg-[#FFF] rounded-xl drop-shadow-3Xl w-[73.2vw] h-96 px-7 pt-7 pb-5">
      <h1 className="text-[#000] text-lg font-montserrat font-bold">
        Activities
      </h1>
      <div className="flex justify-between items-center">
        <span className="text-[#858585] text-sm font-montserrat font-normal">
          May - June 2021
        </span>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] bg-[#98D89E] rounded-full"></div>
            <span className="text-[#000] text-sm font-lato font-normal">
              Recover
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] bg-[#EE8484] rounded-full"></div>
            <span className="text-[#000] text-sm font-lato font-normal">
              Deaths
            </span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="keys" />
          <YAxis yAxisId="left" orientation="left" stroke="#98D89E" />
          <YAxis yAxisId="right" orientation="right" stroke="#EE8484" />
          <Tooltip />
          <Bar yAxisId="left" dataKey="recovered" fill="#98D89E" />
          <Bar yAxisId="right" dataKey="deaths" fill="#EE8484" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;