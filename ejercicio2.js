function espalindromo (palabra) {
    var arraySeparado = palabra.split("");
    var arrayInvertido = arraySeparado.reverse();
    var arrayUnido = arrayInvertido.join('');
    
    // for (let i=0 ; i >= arraySeparado.length; i++){
    //     console.log(arraySeparado[i])
    // }
    return console.log(palabra+" es palindromo? "+(arrayUnido === palabra))
}

espalindromo("ana")