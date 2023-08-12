let getBtn = document.getElementsByTagName("button")[0];
let postBtn = document.getElementsByTagName("button")[1];

function outer() {
  let data = [];

  return function inner(value) {
    if (!value || value.length < 1) {
      return data;
    }

    data = [...data, ...value];

    return data;
  };
}

let inner = outer();

function getDataFync() {
  let array = [1, 2, 3];
  inner(array);
  render();
}

function postDataFync() {
  let array = [4, 5, 6];
  inner(array);
  render();
}

function render() {
  console.log("This is from the render function", inner());
}

getBtn.addEventListener("click", getDataFync);
postBtn.addEventListener("click", postDataFync);
