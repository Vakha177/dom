const div = document.createElement("div");
div.style.width = "20%";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";

const div1 = document.createElement("div");
const text = document.createElement("p");
text.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quod possimus nobis ex minima facilis";
  text.style.textAlign = 'center'

div1.style.border = "1px solid red";
div1.appendChild(text);
div1.style.display = "flex";
div1.style.justifyContent = "center";
div1.style.borderRadius = '5%'

const div2 = document.createElement("div");

div.append(div1, div2);
document.body.append(div);

const s1 = document.createElement("a");
s1.href = "https://github.com/intocode/intro-dom/blob/main/assets/5.png";
s1.textContent = "Intocode";

const s2 = document.createElement("a");
s2.href = "https://github.com/intocode/intro-dom/blob/main/assets/5.png";
s2.textContent = "Instagram";

const s3 = document.createElement("a");
s3.href = "https://github.com/intocode/intro-dom/blob/main/assets/5.png";
s3.textContent = "Google";

div2.style.display = "flex";
div2.style.justifyContent = "space-between";

div2.append(s1, s2, s3);