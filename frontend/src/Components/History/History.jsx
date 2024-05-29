import React from "react";
import "./History.css";

const History = ({ transactions, fetchTransactions }) => {
  const handleDelete = async (_id) => {
    try {
      let response = await fetch("http://localhost:5000/api/transaction", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });
      let res = await response.json();
      if (res.message === "Data deleted") {
        fetchTransactions();
      } else {
        console.error("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <>
      <h2 className="history_header">History</h2>
      <div className="history_container">
        {transactions.map((item, i) => (
          <TransactionHistory category={item} key={i} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default History;

function TransactionHistory({ category, onDelete }) {
  if (!category) {
    return null;
  }

  const handleDeleteClick = () => {
    onDelete(category._id);
  };

  return (
    <div className="history_list">
      <div className="box_1">
        <div className="one">
          <i
            className="fa-regular fa-trash-can"
            onClick={handleDeleteClick} style={{marginRight:'18px'}}
          ></i>
          <span className="history_items" style={{color:'#102542'}}>{category.name ?? ""}</span>
        </div>
        <div className="two">
          <span style={{marginRight:'18px',color:'#102542'}}>{category.amount}/-</span>
          <span className="border"></span>
        </div>
      </div>
    </div>
  );
}
