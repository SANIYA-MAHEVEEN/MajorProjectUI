import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:8000/orders/");
    setOrders(res.data);
  };

  const moveToSales = async (orderId) => {
    await axios.post(`http://localhost:8000/move-order-to-sales/${orderId}/`);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>ID</th><th>Date</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => moveToSales(order.id)} className="bg-green-500 text-white px-2 py-1 rounded">Mark as Sold</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
