import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firestore";
import { useState } from "react";
import CreateBedForm from "./CreateBedForm";

function BedItem({ bed, setCategories }) {
  const { category: name, insuranceRate, rate, id } = bed;
  const [showForm, setShowForm] = useState(false);

  const deleteCategory = async (id) => {
    const categoryDoc = doc(db, "Bed_category", id);
    await deleteDoc(categoryDoc);
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  return (
    <div>
      <h1>Category : {name}</h1>
      <h2>Rate without insurance {rate}</h2>
      <h2>Rate with insurance {insuranceRate}</h2>
      <button className="btn" onClick={() => deleteCategory(id)}>
        Delete bed
      </button>
      <button className="btn" onClick={() => setShowForm((s) => !s)}>
        Update Bed
      </button>
      {showForm && <CreateBedForm bedToedit={bed} />}
    </div>
  );
}

export default BedItem;
