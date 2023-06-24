import AddBudgetItemForm from "./components/AddBudgetItemForm";
import { useState } from "react";
import BudgetItemTable from "./components/BudgetItemTable";

function App() {
  const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);
  const addBudgetItem = (formData: BudgetItem) => {
    setBudgetList([...budgetList, formData]);
  };
  const handleDeleteBudgetItem = (description: string) => {
    setBudgetList(budgetList.filter((item) => item.description != description));
  };

  return (
    <>
      <AddBudgetItemForm addBudgetItem={addBudgetItem} />
      <BudgetItemTable
        budgetList={budgetList}
        deleteBudgetItem={handleDeleteBudgetItem}
      />
    </>
  );
}

export default App;
