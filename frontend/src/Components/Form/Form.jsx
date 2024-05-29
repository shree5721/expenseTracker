import React, { useEffect, useState } from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import History from '../History/History';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await fetch("http://localhost:5000/api/transaction");
    const data = await response.json();
    setTransactions(data);
    
  };

  useEffect(() => {
    fetchTransactions();
  }, []);


  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:5000/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      fetchTransactions();
      reset();
    }
  };

  return (
    <>
      <div className="form_container">
        <h2 className="transaction">Transaction</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputBox">
            <input type="text" {...register('name')} placeholder='Salary, House rent, SIP' />
          </div>
          <select {...register('type')} className='select_input'>
            <option className='option' value="Investment">Investment</option>
            <option className='option' value="Expense">Expense</option>
            <option className='option' value="Savings">Savings</option>
          </select>
          <div className="inputBox">
            <input type="text" placeholder='Enter Amount' {...register('amount')} />
          </div>
          <div className="inputButton">
            <button className='transactionBtn' type='submit'>Create Transaction</button>
          </div>
        </form>
        <History transactions={transactions} fetchTransactions={fetchTransactions} />
      </div>
    </>
  );
};

export default Form;
