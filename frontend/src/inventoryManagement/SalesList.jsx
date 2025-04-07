import React, { useEffect, useState } from "react";
import axios from "axios";

const SalesList = () => {
  const [sales, setSales] = useState([]);
  const [report, setReport] = useState(null);
  const [dates, setDates] = useState({ start: "", end: "" });

  const fetchSales = async () => {
    const res = await axios.get("http://localhost:8000/sales/");
    setSales(res.data);
  };

  const fetchReport = async () => {
    const res = await axios.get(`http://localhost:8000/sales-report/?start_date=${dates.start}&end_date=${dates.end}`);
    setReport(res.data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sales</h2>
      <div className="flex gap-2 mb-4">
        <input type="date" name="start" value={dates.start} onChange={(e) => setDates({ ...dates, start: e.target.value })} className="p-2 border rounded" />
        <input type="date" name="end" value={dates.end} onChange={(e) => setDates({ ...dates, end: e.target.value })} className="p-2 border rounded" />
        <button onClick={fetchReport} className="bg-blue-500 text-white px-4 py-2 rounded">Get Report</button>
      </div>
      {report && (
        <div className="mb-4">
          <p>Total Revenue: ₹{report.total_revenue}</p>
          <p>Best Selling Items:</p>
          <ul className="list-disc ml-6">
            {report.best_selling_items.map((item, i) => (
              <li key={i}>{item.name} ({item.total_quantity_sold})</li>
            ))}
          </ul>
        </div>
      )}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>ID</th><th>Date</th><th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.date}</td>
              <td>{sale.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
