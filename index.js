function evenFibSum(num){
  var arrFib=[], sum = 0, temp=0;
  for(var i = 0; i < num; i++){
    if(i<2){
      arrFib.push(i);
      console.log(arrFib);
    }
    if(arrFib.length > 1){
      temp = arrFib[i] + arrFib[i-1];
      arrFib.push(temp);
      console.log(arrFib);
    }
    if(arrFib[i] % 2 == 0){
      sum += arrFib[i];
    }
  }
  return [sum, arrFib];
}
evenFibSum(10);