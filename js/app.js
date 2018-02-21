var array = [1, 2, 3, 4, 5];


// Crea tu propia función forEach que funcione igual a Array.forEach. 
function miForEach(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  console.log(newArray);
}

miForEach(array, function(item) {
  console.log(item);
});



// Crea tu propia función map que funcione igual a Array.map. 
function miMap(array, callback) {
  var newArrayMap = [];
  for (var i = 0; i < array.length; i++) {
    newArrayMap.push(array[i] * 2);
  }
  console.log(newArrayMap);
}

miMap(array, function(item) {
  console.log(item);
});



//Crea tu propia función filter que funcione igual a Array.filter.
function miFilter(array, filter) {
  var newArrayPar = [];
  var newArrayImpar = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArrayPar.push(array[i]);
    } else {
      newArrayImpar.push(array[i]);
    }
  }
  console.log("El arreglo Par es: " + newArrayPar);
  console.log("El arreglo Impar es: " + newArrayImpar);
}

miFilter(array, function(item) {
  console.log(item);
});



//Crea tu propia función reduce que funcione igual a Array.reduce. 
function miReduce(array, reduce) {
  var totalReduce = 0;
  for (var i = 0; i < array.length; i++) {
    totalReduce = totalReduce + array[i];
  }
  console.log("El total del los elementos es: " + totalReduce);
}

miReduce(array, function(item) {
  console.log(item);
});


// Crea tu propia función sort que funcione igual a Array.sort.

var array2 = [20,10,5,25,15,30];

function miSort(array, callback){
  for (var i = 0; i < array2.length; i++) {
    console.log(array2[i]);
  }

}

miSort(array2, function(item) {
  console.log(item);
});