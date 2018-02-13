# Práctica Fundamentos Node

Práctica de KeepCoding para el módulo de fundamentos de Node

## Instrucciones
----

### Arrancamon la base de datos de mongo:

```
./bin/mongod --dbpath ./data/db --directoryperdb
```

### Instalamos los paquetes:
````
npm install
````

### Instalamos la base de datos:
````
npm run createDB
````

### Arrancamos Nodepop

* En modo desarrollo

    ````
    npm run dev
    ```` 

* En modo producción

    ````
    npm start
    ```` 

## Peticiones a la API
----

### Listar los tags existentes

````
/apiv1/anuncios/tags
````

### Filtrat por nombre

````
/apiv1/anuncios?name=nombre_del_producto
````

### Filtrat por venta
Valores true o false. Ejemplo:

````
/apiv1/anuncios?venta=false
````

### Filtrat por tag:

````
/apiv1/anuncios?tag=nombre_tag
````

### Filtrar por precio:
* Precio menor o igual. Ejemplo:

    ````
    /apiv1/anuncios?precio=-50
    ````

* Precio entre dos valores. Ejemplo:

    ````
    /apiv1/anuncios?precio=20-300
    ````

* Precio mayor o igual. Ejemplo:

    ````
    /apiv1/anuncios?precio=80-
    ````

### Ordernar

* Orden ascendente
    ````
    /apiv1/anuncios?sort=campo
    ````

* Orden descendente
    ````
    /apiv1/anuncios?sort=-campo
    ````

### Paginación

````
/apiv1/anuncios?start=numero&limit=numero
````



## Ayudas

### Utilizar shell de mongo
```
./bin/mongo
```

