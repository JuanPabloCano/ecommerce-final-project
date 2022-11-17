# Ecommerce BackEnd Project using **_NestJs_**

## Stack

```cs
- NestJs
- TypeScript
- MongoDB
- ORM: Mongoose
- PNPM
```

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Architecture

```cs
src
|--- application
|    |- jwt
|    |  |- constants
|    |  |  |- jwt.constants.ts
|    |  |- guard
|    |  |  |- jwt.guard.ts
|    |  |- strategy
|    |  |  |- jwt.strategy.ts
|    |- modules
|    |  |- auth
|    |  |  |- auth.module.ts
|    |  |- product
|    |  |  |- product.module.ts
|    |  |- shoppingCart
|    |  |  |- shoppingCart.module.ts
|    |  |- app.module.ts
|    |- repository
|    |  |- MongoDB.repository.ts
|    |- swagger
|    |  |- OpenApi.ts
|--- domain
|    |- models
|    |  |- auth
|    |  |  |- Login.js
|    |  |  |- Register.ts
|    |  |- product
|    |  |  |- Product.ts
|    |  |- shoppingCart
|    |  |  |- ShoppingCart.ts
|    |  |- user
|    |  |  |- User.ts
|    |- usecases
|    |  |- auth
|    |  |  |- auth.usecases.ts
|    |  |- product
|    |  |  |- product.usecases.ts
|    |  |- shoppingCart
|    |  |  |- shoppingCart.usecases.ts
|--- infrastructure
|    |- driven-adapters
|    |  |- mongoDB
|    |  |  |- auth
|    |  |  |  |- data
|    |  |  |  |  |- Login.dto.ts
|    |  |  |  |  |- Register.dto.ts
|    |  |  |  |- auth.mongodb.adapter.ts
|    |  |  |- product
|    |  |  |  |- data
|    |  |  |  |  |- Product.dto.ts
|    |  |  |  |- product.mongodb.adapter.ts
|    |  |  |- shoppingCart
|    |  |  |  |- data
|    |  |  |  |  |- shoppingCart.dto.ts
|    |  |  |  |- ShoppingCartDTO.mongodb.adapter.ts
|    |- entrypoints
|    |  |- rest-controller
|    |  |  |- auth
|    |  |  |  |- auth.handler.ts
|    |  |  |- product
|    |  |  |  |- product.handler.ts
|    |  |  |- shoppingCart
|    |  |  |  |- shoppingCart.handler.ts
|    |  |- utils
|    |  |  |- exceptions
|    |  |  |  |- CustomError.ts
|--- main.ts
```