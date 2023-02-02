import React, { useState } from "react";
import { useEffect } from "react";
import { selectCards } from "./cardSlice";
import { useSelector } from "react-redux";
export default function Card({ id }) {
  const cards = useSelector(selectCards)
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])
  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
