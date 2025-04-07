import React, { useState } from 'react';
import axios from 'axios';

const Disease = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/disease-predict/', formData);
      setResult(response.data.prediction); // Assuming backend sends: { prediction: "Some Disease" }
    } catch (error) {
      console.error('Prediction failed:', error);
      setResult('Prediction failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Fish Disease Prediction</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Uploaded Image:</p>
            <img src={preview} alt="Fish Preview" className="w-full rounded-lg shadow-md" />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {loading ? 'Predicting...' : 'Predict Disease'}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <p className="text-lg font-semibold">Prediction Result:</p>
          <p className="text-blue-700 text-xl">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Disease;
