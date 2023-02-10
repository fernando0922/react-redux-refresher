import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBun, buyBun } from "../redux/actions/BunAction";
import NumberComponent from "./NumberComponent";

const BunContainer = () => {
  const [buy, setBuy] = useState(0);
  const [add, setAdd] = useState(0);

  const bunCount = Number(useSelector((state) => state.bun.numOfBun));

  const bunDispatch = useDispatch();

  const buyBunClicked = () => {
    bunDispatch(buyBun(buy));
    setBuy(0);
  };

  const addBunClicked = () => {
    bunDispatch(addBun(add));
    setAdd(0);
  };

  const getCount = (num,type) => {
    if(type==="add"){
      setAdd(num)
    }else{
      setBuy(num)
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>NUMBER OF BUNS - {bunCount}</h1>
      <div
        style={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NumberComponent num={buy} getCount={getCount} type="buy" max = {bunCount} />
          <button onClick={() => buyBunClicked()} disabled={bunCount <= 0}>
            BUY BUN
          </button>
        </div>
        <div
          style={{
            width: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NumberComponent num={add} getCount={getCount} type="add" />
          <button onClick={() => addBunClicked()}>ADD BUN</button>
        </div>
      </div>
    </>
  );
};

export default BunContainer;
