export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_iTEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_iTEM":
      //encuentra  el indice del item a eliminar pasdo por parametro
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //hace  una copia de la lista sin el elemento en cuestion y lo devuelve
      let newBasket = [...state.basket];
      //si  encuentra el item elimina este de la nueva lista
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        return state;
      }
      return {
        //retorna  el estado actual mas la nueva lista sin el item
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };

    default:
      return state;
  }
};

export default reducer;
