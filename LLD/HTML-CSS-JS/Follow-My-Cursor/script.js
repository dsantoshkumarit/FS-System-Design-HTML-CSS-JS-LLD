let isFollow = false;
const ballElement = document.querySelector("#ball");
const handleMouseMove = (event) => {
  document.querySelector(
    "#coords"
  ).textContent = `(${event.clientX},${event.clientY})`;
  ballElement.style.left = event.clientX + 10 + "px";
  ballElement.style.top = event.clientY + 10 + "px";
};
const toggleFollow = () => {
  if (isFollow) {
    isFollow = false;
    document.removeEventListener("mousemove", handleMouseMove);
  } else {
    isFollow = true;
    document.addEventListener("mousemove", handleMouseMove);
  }
};
