import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [money, setMoney] =useState(100);

  useEffect(() => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      setSushis(data);
    });
}, []);

const visibleSushis = sushis.slice(startIndex, startIndex + 4);

function handleMoreSushi() {
  setStartIndex(startIndex + 4);
}

function handleEatSushi(sushi) {
if (money < sushi.price) return;

  setEatenSushi([...eatenSushi, sushi.id]);
  setMoney(money - sushi.price)
}

  return (
    <div className="app">
      <SushiContainer 
        sushis={visibleSushis} 
        onMoreSushi={handleMoreSushi}
        onEatSushi={handleEatSushi}
        eatenSushi={eatenSushi}
         />
      <Table plates={eatenSushi} money={money} />
    </div>
  );
}

export default App;
