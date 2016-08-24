var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value){
  console.log(value + 11111);
})
