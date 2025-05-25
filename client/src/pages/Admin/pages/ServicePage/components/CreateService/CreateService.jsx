import { Clock, DollarSign, LetterText, Text } from 'lucide-react';
import React, { useState } from 'react';

function CreateService() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      duration: Number(formData.duration),
    };

    try {
      const res = await fetch('http://127.0.0.1:8080/api/services/saveService', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setMessage(`Success: ${data.message || 'Service created!'}`);
      setFormData({
        name: '',
        description: '',
        price: '',
        duration: '',
      });
    } catch (error) {
      setMessage(`Error saving service: ${error.message}`);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        className="bg-white text-gray-500 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">
          Create a Service
        </h2>

        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <Text size={18} color="#6B7280" />
          <input
            className="w-full outline-none bg-transparent py-2.5"
            type="text"
            name="name"
            placeholder="Service Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <LetterText size={18} color="#6B7280" />
          <input
            className="w-full outline-none bg-transparent py-2.5"
            type="text"
            name="description"
            placeholder="Service Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <DollarSign size={18} color="#6B7280" />
          <input
            className="w-full outline-none bg-transparent py-2.5"
            type="number"
            name="price"
            placeholder="Service Price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <Clock size={18} color="#6B7280" />
          <input
            className="w-full outline-none bg-transparent py-2.5"
            type="number"
            name="duration"
            placeholder="Service Duration (minutes)"
            value={formData.duration}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
        >
          Create Service
        </button>

        {message && (
          <p className="text-center text-sm mt-2 text-indigo-700">{message}</p>
        )}
      </form>
    </div>
  );
}

export default CreateService;
