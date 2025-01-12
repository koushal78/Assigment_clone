import React from "react";

const DashboardCharts = () => {
  return (
    <div className="bg-gray-100 py-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[800px]">
        {/* Compare Accuracy Card */}
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Compare Accuracy
          </h2>
          <div className="flex justify-between items-center mb-6">
            {[
              { time: "10MIN", color: "bg-gray-200 text-gray-600" },
              { time: "15MIN", color: "bg-teal-200 text-teal-700" },
              { time: "30MIN", color: "bg-gray-200 text-gray-600" },
              { time: "45MIN", color: "bg-gray-200 text-gray-600" },
            ].map((slot, index) => (
              <div
                key={index}
                className={`px-3 py-1 rounded-md text-xs font-medium ${slot.color}`}
              >
                {slot.time}
              </div>
            ))}
          </div>
          <div className="w-full h-32">
            {/* Placeholder for Bar Chart */}
            <div className="relative w-full h-full">
              <div className="absolute left-0 bottom-0 w-full h-[90%]">
                {/* Vertical Axis */}
                <div className="absolute w-1 h-full bg-gray-300"></div>
                {/* Horizontal Bars */}
                <div className="flex items-end justify-between h-full w-full">
                  {[100, 25, 50, 75, 50, 60, 90].map((value, index) => (
                    <div
                      key={index}
                      className="w-6 bg-purple-400"
                      style={{ height: `${value}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 w-full">
                {/* Horizontal Axis */}
                <div className="h-1 bg-gray-300"></div>
                {/* Slots */}
                <div className="flex justify-between text-xs mt-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((slot, index) => (
                    <span key={index}>{slot}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Taken Card */}
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Time Taken
          </h2>
          {[30, 4].map((range, idx) => (
            <div key={idx} className="mb-6">
              {/* Ruler */}
              <div className="relative h-8">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-300"></div>
                <div
                  className="absolute top-0 h-[2px] bg-green-500"
                  style={{ width: `${range}%` }}
                ></div>
                <div
                  className="absolute top-0 left-[50%] h-8 w-1 bg-blue-500"
                  style={{
                    transform: "translateX(-50%)",
                  }}
                ></div>
              </div>
              {/* Description */}
              <p className="text-xs text-gray-500 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
