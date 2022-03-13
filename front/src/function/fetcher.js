"use strict";

const postJSON = (url, datas) => {
  return new Promise((acc, rej) => {
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((resp) => resp.json())
      .then(acc)
      .catch(rej);
  });
};

export { postJSON };