import React from "react";
import { rackPerformanceData } from '../data/RackPerformanceData'

const RackTable = () => {
  return (
    <div className="bg-[#1b1b1b] text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Rack Inventory</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-gray-200">
            <th className="p-2">Product ID</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Product Details</th>
            <th className="p-2">Rack ID</th>
            <th className="p-2">Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
          {rackPerformanceData.map((item, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-2">{item.productId}</td>
              <td className="p-2">{item.productName}</td>
              <td className="p-2">{item.productDetails}</td>
              <td className="p-2">{item.rackId}</td>
              <td className="p-2">{item.weight} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RackTable;
