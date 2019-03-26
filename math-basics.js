function basicOp(operation, value1, value2){
  if(operation == "+"){
    let prod = Number(value1) + Number(value2)
    return prod
  }else if(operation == "-"){
    let prod = Number(value1) - Number(value2)
    return prod
  }else if(operation == "*"){
    let prod = Number(value1) * Number(value2)
    return prod
  }else if(operation == "/"){
    let prod = Number(value1) / Number(value2)
    return prod
  }
}
