function calculadora(num1, num2, operador){
    if(num1 >= 1000000 || num2 >= 1000000 || num1 < 0 || num2 < 0){
        return ("Erro!")
    }
    
    switch(operador){
        case "+":
            return num1 + num2
            break
        case "-":
            return num1 - num2
            break
        case "*":
            return num1 * num2
            break
        case "/":
            return num1 / num2
            break
        case "e":
            return num1 ** num2
            break
    }
    
}