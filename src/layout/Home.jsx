import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { ApplicationContext } from "../App";

const Home = (props) => {
  const { selectedItems } = useContext(ApplicationContext);

  return (
    <div className="book-list">
      {selectedItems.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
