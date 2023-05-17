import Card from "./Card";

const FableUI = {
  init: () => {
    console.log("fable ui");

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", FableUI.componentsInit);
    } else {
      FableUI.componentsInit();
    }
  },

  componentsInit: () => {
    console.log("components init");
    Card.init();
  },
};

export default FableUI;
