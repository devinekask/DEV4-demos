import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";

export default function App() {
  const [list, setList] = useState([])

  const handleAddItem = item => {
    setList([...list, item]);
  }

  const handleAmountChange = (id, value) => {
    const tmpList = list.map(item => {
      if (item.id === id && item.amount + value > 0) {
        return { ...item, amount: item.amount + value }
      }
      return item
    })
    setList(tmpList);
  }


  return (
    <div className="App">
      <h1>List</h1>
      <Form onAddItem={handleAddItem} />
      <Stats list={list} />
      <List list={list} onAmountChange={handleAmountChange} />
    </div>
  );
}
