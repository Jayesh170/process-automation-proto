import React from 'react';
import { rackPerformanceData } from '../../data/RackPerformanceData';

function StockTable() {

  const formattedData = rackPerformanceData.flatMap(rack => {
    const totalWeight = rack.products.reduce((sum, product) => sum + product.weight, 0);
    const status = totalWeight >= rack.maxCapacity ? "Full" : "Available";

    return rack.products.map(product => ({
      productId: product.productId,
      productName: product.productName,
      batchId: product.batchId,
      rackId: rack.rackId,
      weight: product.weight,
      status
    }));
  });

  return (
    <div className="mx-10 mt-6">

      <div className="grid grid-cols-6 bg-[#28A263] text-white text-sm font-semibold p-3 rounded-xl">
        <div className="text-left pl-4">Product ID</div>
        <div className="text-left">Product Name</div>
        <div className="text-left">Batch No</div>
        <div className="text-left">Rack ID</div>
        <div className="text-left">Weight</div>
        <div className="text-left pr-4">Status</div>
      </div>

      <div className="divide-y divide-gray-700">
        {formattedData.map((item, index) => (
          <div key={index} className="grid grid-cols-6 text-white text-sm p-3">
            <div className="pl-4">{item.productId}</div>
            <div>{item.productName}</div>
            <div>{item.batchId || 'N/A'}</div>
            <div className="font-bold">{item.rackId}</div>
            <div>{item.weight}KG</div>
            <div className={`font-bold ${item.status === "Full" ? "text-red-500" : "text-green-500"}`}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockTable;
