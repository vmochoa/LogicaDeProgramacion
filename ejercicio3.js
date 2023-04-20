function coincidencias (frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!.,-]/gi,"");
    let contador = 0;
    let mapa = {};

    if(texto_limpio.includes(busqueda)){
        let palabras = texto_limpio.split(" ")
        for (let palabra of palabras){
            if (mapa[palabra]){
                mapa[palabra]++
            }else {
                mapa[palabra] = 1
            }
            resultado = mapa[busqueda];
        } 
    }
    else{
        resultado = 0;
    }
    return resultado;
}
console.log("El numero de coincidencias de "+
    coincidencias("hola como. estas hola hola,", "hola")
)

