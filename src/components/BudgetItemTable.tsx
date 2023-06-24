interface Props {
  budgetList: BudgetItem[];
  deleteBudgetItem: (description: string) => void;
}
const BudgetItemTable = ({ budgetList, deleteBudgetItem }: Props) => {
  return (
    <table className="table table-bordered">
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
            <td>${item.amount.toFixed(2)}</td>
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
  );
};

export default BudgetItemTable;
