import requests

respuesta = requests.get("https://jsonplaceholder.typicode.com/posts/7")

publicacion = respuesta.json()
print(publicacion)