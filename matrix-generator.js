function matrixGenerator(rows, columns) {
  // do work here
  let results = [];
  for (let i = 0; i < rows; i++){
    results.push([]);
    for (let j = 0; j < columns; j++){
      results[i].push(Math.floor(Math.random() * 100));
    }
    results[i].sort(function(a, b) {
      return a - b;
    })
  }

  results.sort(function(a, b) {
    return a - b;
  });
  console.log(results);
  return results;

}

module.exports = matrixGenerator;
