import Card from "./Card";

const FableUI = {
  init: () => {
    console.log("fable ui");
    Card.init();
  },
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", FableUI.init);
} else {
  FableUI.init();
}
