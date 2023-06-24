import AddBudgetItemForm from "./components/AddBudgetItemForm";
import { useState } from "react";

function App() {
  const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);
  const addBudgetItem = (formData: BudgetItem) => {
    setBudgetList([...budgetList, formData]);
  };
  const deleteBudgetItem = (description: string) => {
    setBudgetList(budgetList.filter((item) => item.description != description));
  };

  return (
    <>
      <AddBudgetItemForm addBudgetItem={addBudgetItem} />
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {budgetList.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteBudgetItem(item.description);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
