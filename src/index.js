import "./styles.css";

const aParent = document.querySelectorAll(".a_parent");
const ddMenuA = document.querySelectorAll(".dd_menu_a");

aParent.forEach((aParentItem) => {
  aParentItem.addEventListener("click", () => {
    ddMenuA.forEach((ddMenuAItem2) => {
      ddMenuAItem2.classList.remove("active");
    });
    aParent.forEach((aParentItem2) => {
      aParentItem2.classList.remove("active");
    });
    aParentItem.classList.add("active");
  });
});

ddMenuA.forEach((ddMenuAItem) => {
  ddMenuAItem.addEventListener("click", () => {
    ddMenuA.forEach((ddMenuAItem2) => {
      ddMenuAItem2.classList.remove("active");
    });
    ddMenuAItem.classList.add("active");
  });
});
