import {
  GET_DATA_SUCCESSFULLY,
  ADD_ITEM,
  UPDATE_QUANTITY,
  REMOVE_ITEM,
} from "./actionTypes";

export const getData = () => async (dispatch) => {
  let res = await fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`);
  let data = await res.json();
  dispatch({ type: GET_DATA_SUCCESSFULLY, payload: data });
};

export const updated =
  (id, { quantity }) =>
  (dispatch) => {
    let dat = {};
    fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`, {
      method: "PUT",
      body: JSON.stringify({ quantity, id }),
      headers: {
        "Content-Type": "application/json",
        // "authorization":JSON.getItem("token")
      },
    })
      .then((res) => res.json)
      .then((res) => ((dat = res[0]), console.log(res)))
      .catch((err) => console.log(err));
    // getData()
    dispatch({ type: UPDATE_QUANTITY, payload: dat });
  };
export const removed = (id) => (dispatch) => {
  let dat = {};
  fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`, {
    method: "DELETE",
    body: JSON.stringify({ id }),

    headers: {
      "Content-Type": "application/json",
      // "authorization":JSON.getItem("token")
    },
  })
    .then((res) => res.json)
    .then((res) => ((dat = res), console.log(res)))
    .catch((err) => console.log(err));
  dispatch({ type: REMOVE_ITEM, payload: id });
  // getData()
};
