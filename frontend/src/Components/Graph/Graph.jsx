import React, { useEffect, useState } from "react";
import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Graph.css";
import Label from "../Label/Label";

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    cutout: 115,
  },
};

const Graph = () => {
  const [transactions, setTransactions] = useState([]);
  const [sum, setSum] = useState(0);

  const fetchTransactions = async () => {
    const response = await fetch("http://localhost:5000/api/transaction");
    const data = await response.json();
    setTransactions(data);
    calculateSum(data);
  };

  const calculateSum = (transactions) => {
    const total = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setSum(total);
  };
  useEffect(() => {
    fetchTransactions();
  });
  return (
    <>
      <div className="chart_container">
        <div className="item">
          <div className="chart">
            <Doughnut {...config} />
            <h3 className="total">
              Total <span className="totalAmount"> ₹{sum}</span>
            </h3>
          </div>
          <div className="label">
            <Label />
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
