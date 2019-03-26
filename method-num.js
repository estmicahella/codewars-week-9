function howManySmaller(arr,n){
  let smallest = n
  let b = arr.map(s => s.toFixed(2))
  b.forEach(function(item){
    if(item < smallest){
      smallest = item
    }
  })
  let num = Math.floor(parseInt(smallest))
  return num
}
