function sumArreglo(arreglo){
    var suma=0;
    var promedio=0;
    for(var i=0; i<arreglo.length; i++){
        suma=suma+arreglo[i];
    }
    promedio=(suma/arreglo.length);
    console.log(suma, promedio);
}