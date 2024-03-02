import "./App.css";
import Card from "./components/Card";
import Header from "./layout/Header";

export default function App() {
  return (
    <>
      <Header />

      <div className="book-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
