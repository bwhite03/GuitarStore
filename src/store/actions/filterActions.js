import firebase from "firebase/app";
export const FETCH_DATA = "FETCH_DATA";
export const SELECT_TYPE = "SELECT_TYPE";
export const SELECT_PRICE = "SELECT_PRICE";
export const SELECT_BRAND = "SELECT_BRAND";
export const SELECT_SORT = "SELECT_SORT";

export const fetchData = () => {
  const db = firebase.firestore();
  return dispatch => {
    db.collection("products")
      .get()
      .then(function(querySnapshot) {
        let data = [];
        querySnapshot.forEach(function(doc) {
          data.push(doc.data());
          dispatch({
            type: FETCH_DATA,
            payload: data
          });
        });
      });
  };
};

export const selectType = e => ({
  type: SELECT_TYPE,
  payload: e.target.value
});

export const selectPrice = e => ({
  type: SELECT_PRICE,
  payload: e.target.value
});

export const selectBrand = e => ({
  type: SELECT_BRAND,
  payload: e.target.value
});

export const selectSort = e => ({
  type: SELECT_SORT,
  payload: e.target.value
});
