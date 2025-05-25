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
    setFormData((prev) => ({
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
      const res = await fetch(
        'http://127.0.0.1:8080/api/services/saveService',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

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
    <div className="flex w-full justify-center">
      <form
        className="mx-4 w-full max-w-[340px] rounded-lg bg-white p-4 py-8 text-left text-sm text-gray-500 shadow-[0px_0px_10px_0px] shadow-black/10 md:p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-gray-800">
          Create a Service
        </h2>

        <div className="my-2 flex items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
          <Text size={18} color="#6B7280" />
          <input
            className="w-full bg-transparent py-2.5 outline-none"
            type="text"
            name="name"
            placeholder="Service Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2 flex items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
          <LetterText size={18} color="#6B7280" />
          <input
            className="w-full bg-transparent py-2.5 outline-none"
            type="text"
            name="description"
            placeholder="Service Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-2 flex items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
          <DollarSign size={18} color="#6B7280" />
          <input
            className="w-full bg-transparent py-2.5 outline-none"
            type="number"
            name="price"
            placeholder="Service Price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="mb-8 mt-2 flex items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
          <Clock size={18} color="#6B7280" />
          <input
            className="w-full bg-transparent py-2.5 outline-none"
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
          className="mb-3 w-full rounded bg-indigo-500 py-2.5 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95"
        >
          Create Service
        </button>

        {message && (
          <p className="mt-2 text-center text-sm text-indigo-700">{message}</p>
        )}
      </form>
    </div>
  );
}

export default CreateService;
