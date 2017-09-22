function a(){
   n = 0;
  function inc(){
    n++; 
    console.log(n);
  }
  return inc;
}


var obj = a();
obj();
obj();