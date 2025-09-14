import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { TRANSACTIONI } from "../../constants/types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  type: Yup.string().required("Income type is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be positive")
    .required("Amount is required"),
  date: Yup.date().required("Date is required"),
  description: Yup.string().required("Description is required"),
});

const Income = () => {
  const [transactions, setTransactions] = useState<TRANSACTIONI[]>(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) {
      setTransactions(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const categories = JSON.parse(localStorage.getItem("items") || "[]");

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik<TRANSACTIONI>({
    initialValues: {
      type: "",
      amount: 0,
      date: "",
      description: "",
    },
    validationSchema,
    onSubmit: (submittedValues) => {
      const newIncome: TRANSACTIONI = {
        ...submittedValues,
        transactionType: "income",
      };
      setTransactions((prev) => [...prev, newIncome]);
      resetForm();
      toast.success("Income created successfully");
      navigate("/");
    },
  });

  return (
    <div className="flex justify-center py-10 min-h-screen">
      <div className="bg-gray-600 w-2/3 md:w-1/3 mx-auto flex justify-center rounded-lg h-[500px]">
        <form
          className="flex flex-col gap-3 p-4 w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-lg  text-center">Add Income</h1>

          <select
            name="type"
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-gray-900 rounded-lg  text-white"
          >
            {categories.map((item: string, idx: number) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
          {touched.type && errors.type && (
            <span className="text-red-700 text-sm -mt-2 mx-2">
              {errors.type}
            </span>
          )}

          <input
            type="number"
            name="amount"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Amount"
            className="p-2 bg-gray-900 rounded-lg  text-white"
          />
          {touched.amount && errors.amount && (
            <span className="text-red-700 text-sm -mt-2 mx-2">
              {errors.amount}
            </span>
          )}

          <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 bg-gray-900 rounded-lg  text-white"
          />
          {touched.date && errors.date && (
            <span className="text-red-700 text-sm -mt-2 mx-2">
              {errors.date}
            </span>
          )}

          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Description"
            className="p-2 bg-gray-900 rounded-lg  text-white resize-none"
            rows={2}
          />
          {touched.description && errors.description && (
            <span className="text-red-700 text-sm -mt-2 mx-2">
              {errors.description}
            </span>
          )}

          <button
            type="submit"
            className="bg-black cursor-pointer rounded-lg p-2  text-white"
          >
            Add Income
          </button>
        </form>
      </div>
    </div>
  );
};

export default Income;
