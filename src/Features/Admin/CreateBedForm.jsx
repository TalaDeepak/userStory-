import { useForm } from "react-hook-form";
import { useFirebase } from "../../services/firestore";

function CreateBedForm({
  bedToedit = {},
  setShowForm,
  categories,
  setCategories,
}) {
  const { updateCategory, createCategory } = useFirebase();
  const { id: idToEdit, ...editValues } = bedToedit;
  const isEditSesson = Boolean(idToEdit);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSesson ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSesson) {
      updateCategory(idToEdit, data);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === idToEdit ? { ...category, ...data } : category
        )
      );
    } else {
      createCategory(data, categories, setCategories);
      setShowForm(false);
      reset();
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h1>{isEditSesson ? "Update the bed" : "Create Bed category"}</h1>
      <label htmlFor="category">Category</label>
      <input
        type="string"
        id="category"
        placeholder="Enter type of bed here"
        {...register("category", {
          required: "This field is required",
        })}
      />
      {errors?.category?.message && <p>{errors.category.message}</p>}
      <br />
      <label htmlFor="rate">Rate without insurance</label>
      <input
        type="number"
        id="rate"
        placeholder="Enter rate for per day"
        {...register("rate", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Price should be atleast 1",
          },
        })}
      />
      {errors?.rate?.message && <p>{errors.rate.message}</p>}
      <br />
      <label htmlFor="insuranceRate">Rate with insurance</label>
      <input
        type="number"
        id="insuranceRate"
        placeholder="Enter rate for per day"
        {...register("insuranceRate", {
          required: "This field is required",
          min: {
            value: 1,
            message: "price should be atleast 1",
          },
        })}
      />
      {errors?.insuranceRate?.message && <p>{errors.insuranceRate.message}</p>}
      <br />
      <button type="reset">Cancel</button>
      <button>{isEditSesson ? "Edit Bed" : "Create new Bed"}</button>
    </form>
  );
}

export default CreateBedForm;
