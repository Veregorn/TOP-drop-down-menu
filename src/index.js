import "./styles.css";

const aParent = document.querySelectorAll(".a_parent");

aParent.forEach((aParentItem) => {
  aParentItem.addEventListener('click', () => {
    aParent.forEach((aParentItem2) => {
      aParentItem2.classList.remove("active");
    });
    aParentItem.classList.add("active");
  });
});
