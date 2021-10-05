const button = document.querySelector('.btn');
const colorField = document.querySelector('.color-field');
const colorName = document.querySelector('.color-name');
const simple = document.querySelector('.simple');
const hex = document.querySelector('.hex');

// prettier-ignore
const simpleColorArr = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

// prettier-ignore
const hexColorArr = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let indexMemory;

// Get random color from the array passed in
const randColor = (arr) => {
  let index;
  let hexColor = '#';
  if (simple.classList.contains('active')) {
    // do while loop to make sure the color doesn't repeat
    do {
      index = Math.floor(Math.random() * arr.length);
    } while (index === indexMemory);
    indexMemory = index;
    return arr[index];
  }
  if (hex.classList.contains('active')) {
    for (let i = 1; i <= 6; i++) {
      index = Math.floor(Math.random() * arr.length);
      hexColor += hexColorArr[index];
    }
    return hexColor;
  }
};

// Change the background color and display color name
const changeColor = () => {
  if (simple.classList.contains('active')) {
    const color = randColor(simpleColorArr);
    colorField.style.backgroundColor = color;
    colorName.innerHTML = `<b>${color}</b>`;
  }
  if (hex.classList.contains('active')) {
    const color = randColor(hexColorArr);
    colorField.style.backgroundColor = color;
    colorName.innerHTML = `<b>HEX${color}</b>`;
  }
};

// to switch between simple and hex colors
const toggle = () => {
  simple.classList.toggle('active');
  hex.classList.toggle('active');
  colorField.style.backgroundColor = 'white';
  colorName.innerHTML = '';
};

// Event listeners
button.addEventListener('click', changeColor);
simple.addEventListener('click', toggle);
hex.addEventListener('click', toggle);
