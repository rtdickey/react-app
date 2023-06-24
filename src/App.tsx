import AddBudgetItemForm from "./components/AddBudgetItemForm";
import { useState } from "react";
import BudgetItemTable from "./components/BudgetItemTable";
import SelectCategories from "./components/SelectCategories";

function App() {
  const categories = ["Entertainment", "Groceries", "Utilities"];
  const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);
  const addBudgetItem = (formData: BudgetItem) => {
    setBudgetList([...budgetList, formData]);
  };
  const handleDeleteBudgetItem = (description: string) => {
    setBudgetList(budgetList.filter((item) => item.description != description));
  };

  return (
    <>
      <AddBudgetItemForm
        categories={categories}
        addBudgetItem={addBudgetItem}
      />
      <div className="mt-3">
        <SelectCategories
          categories={categories}
          defaultValue="All Categories"
        />
        <BudgetItemTable
          budgetList={budgetList}
          deleteBudgetItem={handleDeleteBudgetItem}
        />
      </div>
    </>
  );
}

export default App;
