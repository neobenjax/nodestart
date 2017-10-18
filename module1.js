function moduleFunction (){
  console.log('Pollo desde module1');
}

var cadena = 'Pollo cadena de module 1';

module.exports.moduleFunction = moduleFunction;
module.exports.cadena = cadena;
