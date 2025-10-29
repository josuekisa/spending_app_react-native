import React, { useState, useContext, createContext, useMemo } from 'react';

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((tab) => [...tab, expense]);
  };

  const totalAll = useMemo(() => {
    return (expenses || []).reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
  }, [expenses]);

  const totalByCategory = useMemo(() => {
    return (expenses || []).reduce((acc, expense) => {
      const { category, amount } = expense || {};
      if (!category) return acc;
      acc[category] = (acc[category] || 0) + parseFloat(amount || 0);
      return acc;
    }, {});
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, totalByCategory, totalAll }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpenses = () => useContext(ExpenseContext);
