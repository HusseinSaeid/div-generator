let number = document.querySelector("[name='elements']");
let text = document.querySelector("[name='texts']");
let option = document.querySelector("[name='type']");
let res = document.querySelector("[class='results']");
let mysub = document.querySelector("[class='c']");

let mynum, mytext, mytype;

number.oninput = () => (mynum = number.value);
text.oninput = () => (mytext = text.value.trim());
option.oninput = () => (mytype = option.value);

document.forms[0].onsubmit = (e) => e.preventDefault();
mysub.onclick = () =>  {  
  res.innerHTML = ""; // Clear previous results

  for (let i = 0; i < mynum; i++) {
    let myele = document.createElement(mytype);
    myele.className = "box";
    myele.id = 'id-${i + 1}';
    myele.setAttribute("title", "Element");
    let textme = document.createTextNode(mytext);
    myele.appendChild(textme);
    res.appendChild(myele);
  }
};