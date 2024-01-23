function manipulateData(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const manipulatedArray = data.map((num) => (num % 2 === 0 ? num * 2 : num));
        document.getElementById('output').innerText = `Final Result: [${manipulatedArray}]`;
        resolve(manipulatedArray);
      }, 2000);
    });
  });
}

const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);
