import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCake, buyCake } from "../redux/actions/cakeAction";
import NumberComponent from "./NumberComponent";

const CakeContainer = () => {
  const [buy, setBuy] = useState(0);
  const [add, setAdd] = useState(0);

  const cakeCount = Number(useSelector((state) => state.cake.numOfCake));

  const cakeDispatch = useDispatch();

  const buyCakeClicked = () => {
    cakeDispatch(buyCake(buy));
    setBuy(0);
  };

  const addCakeClicked = () => {
    cakeDispatch(addCake(add));
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
      <h1 style={{ textAlign: "center" }}>NUMBER OF CAKES - {cakeCount}</h1>
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
          <NumberComponent num={buy} getCount={getCount} type="buy" max = {cakeCount} />
          <button onClick={() => buyCakeClicked()} disabled={cakeCount <= 0}>
            BUY CAKE
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
          <button onClick={() => addCakeClicked()}>ADD CAKE</button>
        </div>
      </div>
    </>
  );
};

export default CakeContainer;
