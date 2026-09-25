# Suma y resta de dos números
numero1 = int(input("Dame el primer número: "))
numero2 = int(input("Dame el segundo número: "))
operacion = input("¿Qué quieres hacer? (suma, resta, multiplicacion, division, modulo): ")

if operacion == "suma":
    print(numero1 + numero2)
elif operacion == "resta":
    print(numero1 - numero2)
elif operacion == "multiplicacion":
    print(numero1 * numero2)
elif operacion == "division":
    print(numero1 / numero2)
elif operacion == "modulo":
    print(numero1 % numero2)
else:
    print("Operación no válida")

# Suma de 3 números
num1 = int(input("Dame el primer número: "))
num2 = int(input("Dame el segundo número: "))
num3 = int(input("Dame el tercer número: "))

resultado_suma3 = num1 + num2 + num3
print(resultado_suma3)

# Mezclar operaciones con varios números
expresion = input("Escribe tu operación (ej: 2 + 4 - 3): ")
partes = expresion.split()

resultado = int(partes[0])

for i in range(1, len(partes), 2):
    operador = partes[i]
    numero = int(partes[i + 1])

    if operador == "+":
        resultado = resultado + numero
    elif operador == "-":
        resultado = resultado - numero
    elif operador == "*":
        resultado = resultado * numero
    elif operador == "/":
        resultado = resultado / numero

print(resultado)