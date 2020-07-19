<h1 style="align: center;">
    <img src="./images/transporteltda.png">
</h1>

# 🚚 Transportes LTDA

Transportes LTDA é uma aplicação para gerenciamento de entregas(correios 👀).
A ideia desse projeto foi apenas para treino me inspirando na stack (NodeJS, ReactJS).

### Tecnologias usadas nesse projeto
* Express
* Yup
* Sucrase
* Sequelize
* JWT para autenticar os usuários
* bcrypt para criptografar as senhas e salvar apenas o hash no banco
* Prettier
* Eslint
* docker-compose


### Como rodar

```bash
$ docker-compose up // na pasta raiz, fora da pasta api
$ docker exec -it ( container_id ou fast_dev_api ) bash
```

```bash
$ yarn sequelize db:migrate // Para executar todas as migrations
$ yarn sequelize db:migrate:undo // Para desfazer todas as migrations
$ yarn sequelize db:seed:all // Para popular a tabela user, com usuário admin e começar a fazer request
```






<p align="center">Made whit ❤️ by <strong><a href="http://linkedin.com/in/cristian-silva-dev" target="blank" >Cristian</></p></strong>
