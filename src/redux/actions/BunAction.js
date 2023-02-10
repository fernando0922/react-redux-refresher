export const BUY_BUN = "BUY_BUN";
export const ADD_BUN = "ADD_BUN";

export const buyBun = (num) => ({
  type: BUY_BUN,
  num,
});

export const addBun = (num) => ({
  type: ADD_BUN,
  num,
});
