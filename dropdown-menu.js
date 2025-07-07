import "./dropdown-styling.css";

export const dropDown = () => {
  const dropDownContainer = document.createElement("div");
  const dropDownButton = document.createElement("button");
  const dropDownContent = document.createElement("div");

  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  const link3 = document.createElement("a");

  // Nest elements accordingly 
  dropDownContainer.appendChild(dropDownButton);
  dropDownContainer.appendChild(dropDownContent);
  dropDownContent.appendChild(link1);
  dropDownContent.appendChild(link2);
  dropDownContent.appendChild(link3);

  dropDownContainer.classList.add("dropdown");
  dropDownButton.classList.add("dropbtn");
  dropDownContent.classList.add("dropdown-content");
  dropDownContent.id = "myDropdown";
  dropDownButton.textContent = "Dropdown";
  link1.textContent = "Link 1";
  link2.textContent = "Link 2";
  link3.textContent = "Link 3";
  link1.href = "#";
  link2.href = "#";
  link3.href = "#";

  dropDownButton.addEventListener("click", () => {
    dropDownContent.classList.toggle("show");
  });

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      if (dropDownContent.style.display === "block") {
        dropDownContent.style.display === "none";
      }
    }
  };
  
  dropDownContainer.style.position = "relative";
  dropDownContainer.style.display = "inline-block";

  dropDownContent.style.display = "none";
  dropDownContent.style.position = "absolute";

  link1.style.textDecoration = "none";
  link1.style.display = "block";
  link2.style.textDecoration = "none";
  link2.style.display = "block";
  link3.style.textDecoration = "none";
  link3.style.display = "block";

  
  return dropDownContainer;
};

