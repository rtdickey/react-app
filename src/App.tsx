import AddBudgetItemForm from "./components/AddBudgetItemForm";
import { useEffect, useState } from "react";
import BudgetItemTable from "./components/BudgetItemTable";
import SelectCategories from "./components/SelectCategories";

function App() {
  const categories = ["Entertainment", "Groceries", "Utilities"];
  const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredBudgetList, setFilteredBudgetList] = useState<BudgetItem[]>(
    []
  );

  const addBudgetItem = (formData: BudgetItem) => {
    if (
      !budgetList.some(
        (item) =>
          item.description === formData.description &&
          item.category === formData.category
      )
    ) {
      setBudgetList([...budgetList, formData]);
    }
  };

  const handleDeleteBudgetItem = (description: string) => {
    setBudgetList(budgetList.filter((item) => item.description != description));
  };

  useEffect(() => {
    if (categoryFilter) {
      setFilteredBudgetList(
        budgetList.filter((item) => item.category === categoryFilter)
      );
    } else {
      setFilteredBudgetList(budgetList);
    }
  }, [categoryFilter, budgetList]);

  const handleOnChangeCategoryFilter = (selectedCategory: string) => {
    setCategoryFilter(selectedCategory);
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
          onChange={handleOnChangeCategoryFilter}
        />
        <BudgetItemTable
          budgetList={filteredBudgetList}
          deleteBudgetItem={handleDeleteBudgetItem}
        />
      </div>
    </>
  );
}

export default App;
