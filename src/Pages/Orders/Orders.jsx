import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { db } from '../../utility/firebase';
import ordersCss from './Orders.module.css'; // Create this CSS module for styling

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders only if the user is logged in
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .collection('orders')
        .orderBy('created', 'desc') // Order by creation date (latest first)
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className={ordersCss.orders}>
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>You have no orders at the moment.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className={ordersCss.order}>
            <h3>Order ID: {order.id}</h3>
            <p>
              <strong>Total Amount: </strong> ${order.data.amount / 100}
            </p>
            <p>
              <strong>Order Date: </strong>{' '}
              {new Date(order.data.created * 1000).toLocaleDateString()}
            </p>

            <div className={ordersCss.items}>
              <h4>Items:</h4>
              {order.data.basket.map((item, index) => (
                <div key={index} className={ordersCss.item}>
                  <p><strong>{item.title}</strong></p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.amount || 1}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
