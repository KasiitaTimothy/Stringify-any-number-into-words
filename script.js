const numberField = document.querySelector('#number');
const button1 = document.querySelector('#btn1');
const resDiv1 = document.querySelector('#output1');

button1.addEventListener('click', (e) => {
  e.preventDefault();

  const numValue = numberField.value;
  resDiv1.innerHTML = `<p class="flow-text">${numbered.stringify(numValue)}</p>`;

})

//Text number field
const TextnumberField = document.querySelector('#number_text');
const button2 = document.querySelector('#btn2');
const resDiv2 = document.querySelector('#output2');

button2.addEventListener('click', (e) => {
  e.preventDefault();
  const textNumValue = TextnumberField.value;
  const formatedNum = new Intl.NumberFormat().format(numbered.parse(textNumValue))
  resDiv2.innerHTML = `<p class="flow-text">${formatedNum}</p>`;
})
