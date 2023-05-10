import Card from "./Card";

const FableUI = {
  init: () => {
    window.addEventListener("DOMContentLoaded", (event) => {
      console.log("fable ui");
      Card.init();
    });
  },
};

FableUI.init();
