var marcaCoche = ["Abarth", "Romeo",	"Aston", "Martin",	"Audi",	"Bentley"];
var modeloCoche = ["Model A", "Model B", "Model C", "Model D", "Model E", "Model F"];
var annioCoche = [2015, 2013, 2016, 2020, 1999, 2000];

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


for (i = 0; i < marcaCoche.length && i < modeloCoche.length && i < annioCoche.length; i++) {
    var autoNuevo = new auto(marca[i], modelo[i], annio[i]);
    console.log(autoNuevo);
}