function buscar_binaria(lista, item){
    let inicio = 0
    let fim = lista.length - 1
    while (inicio <= fim) {
        
        let meio = (inicio + fim) / 2
        meio = Math.floor(meio)
        
        let chute = lista[meio]

        if(chute == item){
              
            return chute
        }
                    

        if(chute < item){
            inicio = meio + 1
            
        }
            
        
        if (chute > item){
            fim = meio - 1
            
        }
            
    }

    return undefined
}  
        

const numeros = [1, 4, 5, 7, 9]

console.log(buscar_binaria(numeros, 7))