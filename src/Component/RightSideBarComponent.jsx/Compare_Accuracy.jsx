

import { CiSquareCheck } from "react-icons/ci";
const Compare_Accuracy = () => {
  return (
    <div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
    {/* Card 1 */}
    <div className="h-64 border border-gray-300 rounded-lg shadow-sm p-4 w-72">
      <div className="flex items-center">
      <CiSquareCheck className="text-gray-700" />
        <p className="ml-2 text-gray-700 text-sm">Compare Accuracy</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="h-64 border border-gray-300 rounded-lg shadow-sm p-4 w-72">
      <div className="flex items-center">
      <CiSquareCheck className="text-gray-700" />
        <p className="ml-2 text-gray-700 text-sm">Compare Accuracy</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="h-64 border border-gray-300 rounded-lg shadow-sm p-4 w-72">
      <div className="flex items-center">
      <CiSquareCheck className="text-gray-700" />
        <p className="ml-2 text-gray-700 text-sm">Compare Accuracy</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Compare_Accuracy