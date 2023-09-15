import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: "Basic Tees", value: 55 },
  { name: "Custom Short Pants", value: 31 },
  { name: "Super Hoodies", value: 14 },
];
const COLORS = ["#98D89E", "#F7d353", "#EE8484"];

const DoughnutChart = () => {
  return (
    <div className="lg:w-[48%] md:w-[48%] w-[100%] bg-[#FFF] rounded-xl drop-shadow-3Xl py-7 px-9 mb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[#000] text-lg font-montserrat font-bold">
          Top Products
        </h1>
        <span className="text-[#858585] text-xs font-montserrat font-normal">
          May - June 2021
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <PieChart width={165} height={165}>
          <Pie
            data={data}
            cx={77}
            cy={77}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div>
          {data.map((entry, index) => (
            <div key={index} className='flex flex-col mb-4'>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[11px] h-[11px] bg-[${COLORS[index]}] rounded-full`}
                ></div>
                <span className="text-[#000] text-sm font-montserrat font-bold">
                  {entry.name}
                </span>
              </div>
              <span className="text-[#858585] text-xs font-lato font-normal ml-5">
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
