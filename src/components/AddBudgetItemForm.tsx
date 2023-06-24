import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import SelectCategoriesForm from "./SelectCategoriesForm";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  categories: string[];
  addBudgetItem: (formData: BudgetItem) => void;
}

const Form = ({ categories, addBudgetItem }: Props) => {
  const methods = useForm<FormData>({ resolver: zodResolver(schema) });
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    addBudgetItem(data as BudgetItem);
  };

  useEffect(() => {
    setFocus("description");
    reset();
  }, [addBudgetItem]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
            step={0.01}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <SelectCategoriesForm categories={categories} />
          <input type="hidden" id="category" />
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-outline-primary" type="submit">
          Add Item
        </button>
        <button
          className="btn btn-outline-secondary ms-2"
          type="button"
          onClick={() => {
            setFocus("description");
            reset();
          }}
        >
          Reset
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
