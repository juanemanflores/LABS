#Tipos de datos simples (los datos son distintos entre si, texto, números (enteros y flotantes), booleans, 
# es necesario especificar el tipo de dato con base en 
# como se va a utilizar)

#Tenemos cuatro tipos de datos simples 

#string : Es una cadena de texto, se escribe con "", '', """""", ''''''.
#Las comillas simples y dobles se utilizan en textos de una solo línea 
#Las comillas triples se utilizan en texto multilinea 

"Fernanda"
'Ramos'

"""""Fernanda
Ramos"""

#Numero enteros 
34

#Numeros flotantes (es decir con punto decimal)
34.5

#Boleanos : Se divide en dos true o false (se escribe con mayuscula)

True
False

#Variables : Son espacios de memoria que se almacenan en nuestro programa 
# (Imagina una cajita en la que puedes guardar distintas cosas, 
# es decir varia, piede cambiar)

#Declaro mi variable con la palabra nombre, con el signo de igual asigno y con "Fernanda" la defino
nombre = "Fernanda"

#Se puede tambien modificar (las variables comunes se pueden modificar) redefinirla*
nombre = "Luisa"

#Concatenación : Se refiere a la acción de unir dos strings. Nota : cada espacio es un caracter
# (esto solo funciona con strings)
#Print función que me permite imprimir en la consola 
saludo = "Hola " + nombre + " que gusto que estes aqui"
print(saludo)

#Concatenra entre string y numero o booleans con fstring que lo que hace es tomar un dato y convertirlo a texto 
adulto = True
edad = 34

mensaje = f"Tienes  {edad}  y eres  {adulto}"
print(mensaje)

#del operador para borra algun dato debe usarse antes de declarar la variable de "mensaje" 
# para que pueda funcionar 

adulto = True
#del adulto
edad = 34

mensaje = f"Tienes  {edad}  y eres  {adulto}"
print(mensaje)

#Operadores de pertenencia siempre nos dan true o false 
#in / not in 

print("Tienes" in mensaje) #True
print ("Tienes" not in mensaje) #False 

#Datos compuestos : es decir que son datos que tiene otros datos dentro de si y/o que se pueden agrupar 

#Lista (matriz) : Esta se crea con corchetes, es un conjunto de datos (Tipo de dato list), nos permite agrupar datos y 
# acceder al dato 
# que necesitemos. Es un conjunto de datos de distinto tipo que se puede modificar
#Dentro de la programación se cuenta del 0 al 9, es por eso que si elegimos el elemento 0 nos muestra "Taffy",
# este es nuestro indice es 
#decir nuestra posición, entonces el indice es 0 y el numero del elemento es 1, pero para poder acceder a 
# el necesitamos indicar la posición 


lista = ["Taffy", "Maltes", True, 14]
lista [0] = "Chaffy"
print(lista[0])


#Tupla : Es igual a la lista solo que en lugar de corchetes utilizamos parentesis, la diferencia de la tupla 
# con la lista es que la tupla 
#no se puede modificar. Es decir vamos a tener un conjunto de datos que no se modifiquen   
tupla = ("Pepe", "Salchicha", True, 5)
print(tupla[0])

#Conjunto (set) : Es una función que nos permite tener un conjunto de datos. Se crea con llaves. No tiene un orden fijo, 
# son elementos desordenados y 
#que pueden intercambiarse entre si, sin embargo no hay cambios como en las tuplas 
#En un conjunto no podemos acceder a los elementos a través del indice, ni repetir valores, son datos desordenados 

conjunto = {"Miley", "Maltes", True, 8}
print(conjunto)

#Diccionario (dict) : Nos muestra los elementos a través de el nombre asociado. su estructura se define a través 
# de la clave-valor (key-value)
#Se separan con comas 
diccionario = {
    'nombre' : "Ozzi",
    'raza' : "Pomerania",
    'mascota' : True,
    'edad' : 1
}

print(diccionario['nombre'])

#Type : Es una función que nos devuelve el tipo de dato con el que estamos trabajando 
tipo_de_dato = type(2)
tipo_de_dato1 = type("Hola")
print(tipo_de_dato)
print(tipo_de_dato1)