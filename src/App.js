import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./layout/Home";
import { createContext, useState } from "react";

export const ApplicationContext = createContext();

const bookList = [
  {
    id: "abc",
    name: "Book 1",
    quantity: 0,
    price: 100,
  },
  {
    id: "abc1",
    name: "Book 2",
    quantity: 0,
    price: 150,
  },
  {
    id: "abc2",
    name: "Book 3",
    quantity: 0,
    price: 200,
  },
  {
    id: "abc3",
    name: "Book 4",
    quantity: 0,
    price: 250,
  },
  {
    id: "abc4",
    name: "Book 5",
    quantity: 0,
    price: 350,
  },
  {
    id: "abc5",
    name: "Book 6",
    quantity: 0,
    price: 300,
  },
];

export default function App() {
  const [selectedItems, setSelectedItems] = useState(bookList);

  return (
    <>
      <ApplicationContext.Provider
        value={{
          selectedItems,
          setSelectedItems,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" Component={() => <Home />} />
          <Route path="/cart" Component={() => <Cart />} />
        </Routes>
      </ApplicationContext.Provider>
    </>
  );
}
