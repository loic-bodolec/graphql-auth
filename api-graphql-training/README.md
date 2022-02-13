# TypeGraphQL + TypeORM + TypeScript

(pré-requis : node + npm + mysql)

## Installation & Run

1- Créer la base de données dans MYSQL

CREATE SCHEMA training_graphql_auth;

2- Configuration du fichier .env

Voir fichier ".env.example"

3- Installation des dépendances

```sh
npm install
```

4- Commande pour générer une migration :

(après avoir créer le script suivant dans le package.json : "typeorm:cli": "ts-node ./node_modules/typeorm/cli")

```sh
npm run typeorm:cli -- migration:generate -n +"nom de votre migration"
```

(ex : "npm run typeorm:cli -- migration:generate -n InitDataBase" => création de la migration nommée InitDataBase)

5- Commande pour lancer la migration :

```sh
npm run typeorm:cli -- migration:run
```

6- Lancement du serveur :

```sh
npm start
```

## Starter

Pour créer l'API, complétez selon votre besoin les dossiers `src/models` et `src/resolvers`.

source : <https://github.com/aleygues/lc-typegraphql-typeorm-authentication>
