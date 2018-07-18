# UsersNodeJS

Projeto Node.JS localizados na raíz do projeto
Projeto React.JS localizados na pasta client/

### Abrindo e compilando o projeto
---
Para compilar o projeto é necessário o NodeJs 10+, NPM, Yarn e MongoDB.

Ao abrir o projeto, executar os comandos na raíz do projeto para instalar as dependências necessárias

```
npm install
cd client
yarn install
```

No front-end é utilizado SASS, e para que este seja compilado, é necessário executar o script gulpfile.js localizado na pasta client/.

Existem dois comandos:
O primeiro apenas compila o SASS, e o segundo compila o SASS e minifica o CSS gerado, permitindo que em produção o resultado seja mais leve.

```
gulp
gulp --production
```

Também é possível compilar o SASS ao alterar, executando o comando:

```
gulp --watch
```

Toda vez que um arquivo .scss na pasta client/src/css for alterado, será executado o script de compilação.

O projeto pode ser executado com o seguinte comando na raíz:

```
npm run dev
```

Serão executados a aplicação Node.js e React.Js simultaneamente.
Também é possível executá-las separadamente com os comandos:

-NodeJS
```
node server.js
```

-React.JS
```
cd client
yarn start
```

Imagens

![alt text](https://i.imgur.com/cr7A691.png)
![alt text](https://i.imgur.com/0fLwGgW.png)
![alt text](https://i.imgur.com/ABqPs87.png)
