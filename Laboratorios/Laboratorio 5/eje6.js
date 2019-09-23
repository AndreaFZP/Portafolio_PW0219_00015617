function ordenarArreglo(arreglo){

    for(var i=0; i<arreglo.length; i++){
        if(arreglo[i]>=arreglo[i+1]){
            arreglo[i]=arreglo[i+1];
            i++;
        }
    
    }
    console.log(arreglo);
}