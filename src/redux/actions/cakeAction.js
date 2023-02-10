export const BUY_CAKE = "BUY_CAKE";
export const ADD_CAKE = "ADD_CAKE";

export const buyCake = (num) => ({
  type: BUY_CAKE,
  num
});

export const addCake = (num) => ({
  type: ADD_CAKE,
  num
});
