import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
});

const Categories = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        category: "",
      },
      validationSchema,
      onSubmit: (submittedValues, actions) => {
        console.log(submittedValues);
        actions.resetForm();
      },
    });

  return (
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
        className="bg-black text-white rounded-md py-2 px-4 h-10 mt-6"
      >
        Add
      </button>
    </form>
  );
};

export default Categories;
