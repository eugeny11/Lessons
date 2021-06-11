const customDiv = document.createElement("div");
customDiv.innerHTML = "<span id=\"custom\">kkk</span>";
const parent = document.getElementById("app");
document.body.insertBefore(customDiv,parent);

const content = "111";
parent.innerHTML = `<div><span id="custom1">${content}</span></div>`;
const parent2 = document.getElementById("app2");
parent2.insertAdjacentHTML('afterbegin', `<div><span id="custom2">${content}</span></div>`);
