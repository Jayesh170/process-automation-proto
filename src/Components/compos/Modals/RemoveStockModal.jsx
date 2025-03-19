import React, { useState } from 'react';

function RemoveStockModal({ closeModal }) {
  const [formData, setFormData] = useState({
    productId: '',
    quantity: '',
    batchId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("REMOVE STOCK:", formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1B1B1B] p-6 rounded-xl shadow-lg text-white w-[400px] transform rotate-0">
        <h2 className="text-2xl font-bold font-jakarta text-center mb-6">REMOVE STOCK</h2>

        <div className="flex flex-col gap-6">
          <input type="text" name="productId" value={formData.productId} onChange={handleChange} 
            placeholder="PRODUCT ID" className="p-2 text-sm font-jakarta bg-[#F4F4F4] text-gray-600 
            rounded-3xl border border-[#FF4C4C] focus:outline-2 focus:outline-[#FF4C4C]" />
          
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} 
            placeholder="QUANTITY" className="p-2 text-sm font-jakarta bg-[#F4F4F4] text-gray-600 
            rounded-3xl border border-[#FF4C4C] focus:outline-2 focus:outline-[#FF4C4C]" />

          <input type="text" name="batchId" value={formData.batchId} onChange={handleChange} 
            placeholder="BATCH ID" className="p-2 text-sm font-jakarta bg-[#F4F4F4] text-gray-600 
            rounded-3xl border border-[#FF4C4C] focus:outline-2 focus:outline-[#FF4C4C]" />

          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" required /> CONFIRM FOR REMOVING
          </label>

          <button onClick={handleSubmit} className="p-3 rounded-3xl font-semibold mt-2 bg-[#FF4C4C] hover:opacity-80">
            REMOVE STOCK
          </button>
          <button onClick={closeModal} className="text-sm text-gray-400 mt-2">Close</button>
        </div>
      </div>
    </div>
  );
}

export default RemoveStockModal;
