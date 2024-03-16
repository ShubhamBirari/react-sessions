import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./layout/Header";

const bookList = [
  {
    id: "abc",
    name: "Book 1",
    quantity: 0,
    price: 50,
  },
  {
    id: "abc1",
    name: "Book 2",
    quantity: 0,
    price: 50,
  },
  {
    id: "abc2",
    name: "Book 3",
    quantity: 0,
    price: 50,
  },
  {
    id: "abc3",
    name: "Book 4",
    quantity: 0,
    price: 50,
  },
  {
    id: "abc4",
    name: "Book 5",
    quantity: 0,
    price: 50,
  },
  {
    id: "abc5",
    name: "Book 6",
    quantity: 0,
    price: 50,
  },
];

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(bookList);
  }, []);

  return (
    <>
      <Header />

      <div className="book-list">
        {list.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
