# fizzbuzz
## Explorers
- Un archivo json entrega una lista de explorers a filtrar
- Se filtra un número si es divisible por 3, 5 o 3 y 5.
- Un bot de telegram entrega los nombres de los explorers por misión
- Un bot de telegram aplica el método fizzbuzz que valida según sea el número dado
- Un servidor abierto en el puerto 3000 `localhost:3000/v1/`

##
`````shell
npm run server
`````
## Consultas
- Explorers por misión `localhost:3000/v1/explorers/:mision` "node or java".
- Cantidad de explorers por misión `localhost:3000/v1/explorers/amount/:mision` "node or java".
- Usernames por misión `localhost:3000/v1/explorers/usernames/:mision` "node or java".
- Filtro fizzbuzz `localhost:3000/v1/fizzbuzz/:score` devuelve fizz, buzz o fizzbuzz.