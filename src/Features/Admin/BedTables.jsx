import { useEffect } from "react";
import { categoriesCollectionRef } from "../../services/firestore";
import { getDocs } from "firebase/firestore";
import BedItem from "./BedItem";

function BedTables({ categories, setCategories }) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      // Show the table after fetching data
    };

    fetchData();
  }, [setCategories]);

  return (
    <>
      <div>Avialble beds</div>
      {categories.map((bed) => (
        <BedItem setCategories={setCategories} bed={bed} key={bed.id} />
      ))}
    </>
  );
}

export default BedTables;
