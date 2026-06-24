import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushis, onMoreSushi, onEatSushi, eatenSushi }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi 
          key={sushi.id} 
          sushi={sushi} 
          onEatSushi={onEatSushi}
          eatenSushi={eatenSushi}
          />
      ))}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
