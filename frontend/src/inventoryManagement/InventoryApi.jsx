const API_BASE = "http://localhost:8000/api"; // Adjust if using a different port

export const getFishStock = async () => {
  const response = await fetch(`${API_BASE}/fish-stock/`);
  return response.json();
};

export const getOrders = async () => {
  const response = await fetch(`${API_BASE}/orders/`);
  return response.json();
};

export const getSales = async () => {
  const response = await fetch(`${API_BASE}/sales/`);
  return response.json();
};
