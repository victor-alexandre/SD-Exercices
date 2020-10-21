# Aula 16/10

Exercício realizado para a aula do dia 16/10


## Executar o mongoDB no docker - Fedora
```
//start docker
sudo systemctl start docker
//run mongo image on port 27017
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
//accessing mongo via bash
docker exec -it <imageName> bash
mongo
show dbs
```

## Executar o app

```
node app.js
```

## Documentação no Swagger

http://localhost:8080/docs/swagger
