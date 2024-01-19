//your JS code here. If required.
function manipulateData(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredArray = data.filter((num) => num % 2 === 0);
        document.getElementById('output').innerText = `Filtered Array: [${filteredArray}]`;
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((filteredArray) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArray = filteredArray.map((num) => (num % 2 === 0 ? num * 2 : num));
        document.getElementById('output').innerText = `Final Result: [${multipliedArray}]`;
        resolve(multipliedArray);
      }, 2000);
    });
  });
}

const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);
