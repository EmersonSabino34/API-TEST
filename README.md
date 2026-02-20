### Criando projeto

* npm init -y

* npm install json-server

* criando modelo banco.json
 ```
 {
    "category": [
        { "id": 1, "name": "home" },
        { "id": 2, "name": "car" }
    ],

    "users": [
        { "id": 1, "name": "emerson sabindo", "age": 34, "status": true },
        { "id": 2, "name": "sebastião rodrigo nasciemnto", "age": 34, "status": false }
    ]
}

 ```

* npx json-server --port 8080 banco.json

### Endpont
 * get all -- listar todos os dados do endpoint
 * get one -- listar somente um registro
 * delete  -- apagar um registro
 * post    -- inserir um registro
 * put     -- atualizar um registro

### mapeando endpoint category

```
get http://localhost:8080/category
```

```
get http://localhost:8080/category/1
```

```
delete http://localhost:8080/category/1
```

```
post http://localhost:8080/category
{
    "name": "house"
}
```

```
put http://localhost:8080/category/1
{
    "name": "house"
}
```

### mapeando endpoint users

```
get http://localhost:8080/users
```

```
get http://localhost:8080/users/1
```

```
delete http://localhost:8080/users/1
```

```
post http://localhost:8080/users
{
    "name": "emerson sabindo", 
    "age": 34, 
    "status": true
}
```

```
put http://localhost:8080/users/1

{
    "name": "emerson sabindo", 
    "age": 34, 
    "status": true
}
```

### Testar endpont
 * Insomnia
 * Postman
 * Thunder Client
 * Rest Client

###
