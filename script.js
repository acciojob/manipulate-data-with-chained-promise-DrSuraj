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
        document.getElementById('output').innerText = `Filtered Result: [${filteredArray}]`;
        resolve(filteredArray);
      }, 1000); // Changed to 1000 milliseconds for the first promise
    });
  })
  .then((filteredArray) => {
    const multipliedArray = filteredArray.map((num) => num * 2);
    document.getElementById('output').innerText = `Final Result: [${multipliedArray}]`;
    return multipliedArray;
  });
}

const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);
