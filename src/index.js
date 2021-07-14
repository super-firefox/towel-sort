
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let singleMatrix = [];

  if(matrix === undefined){
    return [];
  }

  for(let i=0; i < matrix.length; i++){
    if(i % 2 === 0){
      singleMatrix.push(...matrix[i].sort((a, b) => a-b));
    } else {
      singleMatrix.push(...matrix[i].sort((a, b) => b-a));
    }
  }
  return singleMatrix;
}
