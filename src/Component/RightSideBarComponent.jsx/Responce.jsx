import React from "react";

const Responce = () => {
    return (
        <div className="bg-gray-100 py-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[800px]">
            {/* Improvements Card */}
            <div className="h-40 p-2 border rounded-lg shadow-lg w-40 bg-white overflow-hidden">
              <h2 className="text-sm font-semibold text-gray-700 mb-2">
                Improvements
              </h2>
              <h3 className="text-xs font-medium text-gray-500 mb-3">
                Subject Understanding
              </h3>
              <div className="flex flex-wrap gap-1">
                {[
                  { text: "Geography", color: "bg-teal-100 text-teal-600" },
                  { text: "Politics", color: "bg-yellow-100 text-yellow-600" },
                  { text: "Current Affairs", color: "bg-green-100 text-green-600" },
                  { text: "General Studies", color: "bg-blue-100 text-blue-600" },
                  { text: "Mathematics", color: "bg-purple-100 text-purple-600" },
                  { text: "Social Studies", color: "bg-gray-200 text-gray-700" },
                  { text: "English Literature", color: "bg-red-100 text-red-600" },
                  { text: "Indian History", color: "bg-orange-100 text-orange-600" },
                ].map((subject, index) => (
                  <span
                    key={index}
                    className={`px-1 py-1 text-[0.65rem] font-medium rounded-full ${subject.color} border`}
                  >
                    {subject.text}
                  </span>
                ))}
              </div>
            </div>
    
            {/* Response Time Card */}
            <div className="h-40 p-2 w-40 border rounded-lg shadow-lg bg-white">
              <h2 className="text-sm font-semibold text-gray-700 mb-2">
                Response Time
              </h2>
              <div className="text-xs font-medium text-gray-500 mb-2">
                Std Time - 2min
              </div>
              <div className="flex flex-col items-center ">
                <div className="text-2xl font-bold text-blue-600">60%</div>
                <div className="text-xs text-gray-500">Ans took</div>
                <div className="text-red-600 text-sm font-semibold">2min</div>
              </div>
              <div className="mt-1 text-center text-red-600 font-bold text-xs">
                You are slow!
              </div>
            </div>
    
            {/* Approach Data Card */}
            <div className="h-40 p-2 w-40 border rounded-lg shadow-lg bg-white overflow-hidden">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Approach Data
              </h2>
              <div className="space-y-2">
                {[
                  { percentage: "25%", text: "Based on Facts" },
                  { percentage: "32%", text: "Based on Analysis" },
                  { percentage: "19%", text: "Based on Elimination" },
                  { percentage: "24%", text: "Based on Guess" },
                ].map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs font-medium"
                  >
                    <span className="px-2 py-1 rounded-lg bg-purple-100 text-purple-600 border">
                      {data.percentage}
                    </span>
                    <span className="text-gray-600">{data.text}</span>
                  </div>
                ))}
              </div>
            </div>
    
            {/* Suggestions Card */}
            <div className="h-40 p-2 w-40 border rounded-lg shadow-lg bg-white overflow-hidden">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Suggestions
              </h2>
              <div className="grid grid-cols-3 gap-1 text-center text-xs">
                {[
                  { range: "Q. 1-12", time: "40 sec", color: "text-green-600" },
                  { range: "Q. 12-32", time: "1.5 min", color: "text-yellow-600" },
                  { range: "Q. 32-40", time: "3 min", color: "text-red-600" },
                ].map((suggestion, index) => (
                  <div key={index}>
                    <div
                      className={`rounded-lg bg-gray-100 px-1 py-1 ${suggestion.color} border`}
                    >
                      {suggestion.range}
                    </div>
                    <div className="mt-1">{suggestion.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Responce;
