import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBUQqW_FTqCNxk-oqsBQLgZxuBpY1BCFc0",
  authDomain: "intern-28680.firebaseapp.com",
  projectId: "intern-28680",
  storageBucket: "intern-28680.appspot.com",
  messagingSenderId: "354211912613",
  appId: "1:354211912613:web:7a6c22a01ced7504f3264c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const categoriesCollectionRef = collection(db, "Bed_category");
const FireBaseContext = createContext();

const updateCategory = async (id, updatedFields) => {
  const categoryDoc = doc(db, "Bed_category", id);
  const newFields = { ...updatedFields, Updated_Date: serverTimestamp() };
  await updateDoc(categoryDoc, newFields);
};

const createCategory = async (data, categories, setCategories) => {
  const categoryToAdd = {
    ...data,
    Created_Date: serverTimestamp(),
    Updated_Date: serverTimestamp(),
  };

  const docRef = await addDoc(categoriesCollectionRef, categoryToAdd);
  setCategories([...categories, { id: docRef.id, ...categoryToAdd }]);
};

export function FireBaseProvider({ children }) {
  return (
    <FireBaseContext.Provider value={{ createCategory, updateCategory }}>
      {children}
    </FireBaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FireBaseContext);
  if (context === undefined)
    throw new Error("context used outsied the provider");
  return context;
}
