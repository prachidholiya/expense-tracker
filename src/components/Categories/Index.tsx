import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import * as Yup from "yup";

const validationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
});

const Categories = () => {
  const [items, setItems] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      category: "",
    },
    validationSchema,
    onSubmit: (submittedValues) => {
      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex] = submittedValues.category;
        setItems(updatedItems);
        toast.success("Category updated successfully");
        setEditIndex(null);
      } else {
        setItems([...items, submittedValues.category]);
        toast.success("Category added successfully");
      }
      resetForm();
    },
  });

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setFieldValue("category", items[idx]);
  };

  const handleDelete = (idx: number) => {
    const res = items.filter((_, index) => index !== idx);
    setItems(res);
    toast.success("Category deleted successfully");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center w-full space-x-2"
      >
        <div className="flex flex-col w-1/3">
          <label htmlFor="category" className="mb-1 text-left">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Add category"
            className="border border-gray-500 rounded-md py-2 px-4"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.category && errors.category && (
            <span className="text-red-500 text-xs mt-1">{errors.category}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white cursor-pointer rounded-md py-2 px-4 h-10 mt-6"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>
      <div className=" rounded-xl shadow-lg border border-gray-800 p-6 mt-6 mx-auto max-w-2xl">
        <div className="flex flex-wrap gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-500 text-white px-4 py-2 rounded-full shadow text-base font-medium flex items-center justify-between"
            >
              <span className="truncate">{item}</span>
              <div className="">
                <span className="flex items-center gap-1 ml-3">
                  <button
                    type="button"
                    onClick={() => handleEdit(idx)}
                    className="hover:text-green-900 cursor-pointer"
                    title="Edit"
                  >
                    <CiEdit size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(idx)}
                    className="hover:text-red-600 cursor-pointer"
                    title="Delete"
                  >
                    <MdDelete size={20} />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
