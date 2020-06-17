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

## 

### Como rodar

```bash
$ docker-compose up // na pasta raiz, fora da pasta api
$ docker exec -it container_id bash //para entrar dentro do container e executar os comandos de yarn, evitando bagunça com a node_modules.
```

##

### Para usar
Antes de usar recomendo que rode as migrations e os seeds para adicionar usuário e criar as tabelas no banco.

---

<p align="center">Made whit ❤️ by <strong><a href="http://linkedin.com/in/cristian-silva-dev" target="blank" >Cristian</></p></strong>
