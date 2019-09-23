function ocurrenciasN(numero,arreglo){
    var ocurrencias=0;
    for(var i=0; i<arreglo.length; i++){
        if(numero===arreglo[i]){
            ocurrencias++;
        }
    
    }
    console.log(ocurrencias);
}