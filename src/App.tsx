import { useState } from "react";
import ExpenseList from "./assets/expense-tracker/ExpenseList";
import ExpanseFilter from "./assets/expense-tracker/ExpanseFilter";
import ExpenseForm from "./assets/expense-tracker/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

const App = () => {
  const [selectedCatagory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCatagory
    ? expenses.filter((e) => e.category === selectedCatagory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((e: { id: number }) => e.id !== id))
        }
      />
    </>
  );
};

export default App;
