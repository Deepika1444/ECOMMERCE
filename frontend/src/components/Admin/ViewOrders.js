import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get('http://localhost:5000/api/admin/orders');
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <h4>Order ID: {order._id}</h4>
          <p>Total: ${order.totalAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewOrders;
