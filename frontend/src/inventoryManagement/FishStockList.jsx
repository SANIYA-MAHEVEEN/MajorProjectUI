import React, { useState } from 'react';

const FishStockList = () => {
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [stockList, setStockList] = useState([]);

  const handleAdd = () => {
    if (!name || !qty || !price) {
      alert('Please fill all fields!');
      return;
    }

    const amount = parseFloat(price) * parseInt(qty);
    const newItem = { name, qty: parseInt(qty), price: parseFloat(price), amount };

    setStockList([...stockList, newItem]);

    // Clear inputs after adding
    setName('');
    setQty('');
    setPrice('');
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Fish Stock List</h2>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          placeholder="Fish Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {stockList.length > 0 && (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {stockList.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.qty}</td>
                <td className="border px-4 py-2">₹{item.price.toFixed(2)}</td>
                <td className="border px-4 py-2">₹{item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FishStockList;
