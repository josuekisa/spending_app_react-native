import { View, Text } from 'react-native';
import React, { useState, useContext, createContext } from 'react';
const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((tab) => [...tab, expense]);
  };
  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>{children}</ExpenseContext.Provider>
  );
}

export const useExpenses = () => useContext(ExpenseContext);
