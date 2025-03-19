import React, { useState } from 'react';

function RegisterProductModal({ closeModal }) {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    weight: '',
    rackId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("REGISTER PRODUCT:", formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1B1B1B] px-2 py-6 rounded-xl shadow-lg text-white w-[400px] transform rotate-0">
        <h2 className="text-2xl font-bold font-jakarta text-center mb-6">REGISTER PRODUCT</h2>

        <div className="flex flex-col gap-8 items-center">
          <input type="text" name="productId" value={formData.productId} onChange={handleChange} 
            placeholder="PRODUCT ID" className="w-[270px] p-2 text-sm font-jakarta bg-[#F4F4F4] text-gray-600 
            rounded-3xl border border-[#28A263] focus:outline-2 focus:outline-[#28A263]" />

          <input type="text" name="productName" value={formData.productName} onChange={handleChange} 
            placeholder="PRODUCT NAME" className="w-[270px] p-2 text-sm font-jakarta bg-[#F4F4F4] text-gray-600 
            rounded-3xl border border-[#28A263] focus:outline-2 focus:outline-[#28A263]" />

          <input type="text" name="weight" value={formData.weight} onChange={handleChange} 
            placeholder="WEIGHT" className="w-[270px] p-2 text-sm font-jakarta bg-[#F4F4F4] text-gray-600 
            rounded-3xl border border-[#28A263] focus:outline-2 focus:outline-[#28A263]" />

          <button onClick={handleSubmit} className="w-max min-w-[150px] px-3 py-3 text-white text- font-jakarta font-bold t rounded-xl bg-[#28A263] hover:opacity-80">
            REGISTER PRODUCT
          </button>
          <button onClick={closeModal} className="text-sm text-gray-400 mt-2">Close</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterProductModal;
