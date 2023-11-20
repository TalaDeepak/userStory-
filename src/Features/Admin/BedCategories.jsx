import { useState } from "react";
import CreateBedForm from "./CreateBedForm";
import BedTables from "./BedTables";

function BedCategories() {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([]);

  return (
    <div className="components">
      <BedTables categories={categories} setCategories={setCategories} />
      {showForm && (
        <CreateBedForm
          categories={categories}
          setShowForm={setShowForm}
          setCategories={setCategories}
        />
      )}
      <button className="btn" onClick={() => setShowForm((s) => !s)}>
        {showForm ? "Hide form" : "Add a bed"}
      </button>
    </div>
  );
}

export default BedCategories;
