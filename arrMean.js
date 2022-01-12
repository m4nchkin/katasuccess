function getAverage(marks){
  var total = 0;
  for(let i = 0; i < marks.length; i++){
    total += marks[i];
  }
  return Math.floor(total/marks.length)
}