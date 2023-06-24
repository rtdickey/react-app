import AddBudgetItemForm from "./components/AddBudgetItemForm";
import { useState } from "react";

function App() {
  const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);
  const addBudgetItem = (formData: BudgetItem) => {
    setBudgetList([...budgetList, formData]);
  };
  return (
    <>
      <AddBudgetItemForm addBudgetItem={addBudgetItem} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {budgetList.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
