import React, { useState, useEffect } from "react";

//STYLES
import "./style.css";

//COMPONENTS
import Header from "../../components/header";
import Orders from "../../components/orders";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";

//DATABASE
import { db } from "../../firebase";

export default function OrdersPage() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
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
    <div className="ordersPage">
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map((order) => {
            <Orders order={order} />;
          })}
        </div>
      </div>
    </div>
  );
}
