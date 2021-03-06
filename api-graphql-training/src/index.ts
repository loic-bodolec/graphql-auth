import 'reflect-metadata';
import { ApolloServer } from "apollo-server";
import { UsersResolver } from './resolvers/Users';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { customAuthChecker } from './auth';
import { ProjectsResolver } from './resolvers/Project';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
    // database connection, the config is loaded from ormconfig.json (or from .env)
    await createConnection();

    // ... Building schema here
    const schema = await buildSchema({
        resolvers: [UsersResolver, ProjectsResolver],
        authChecker: customAuthChecker,
    });

    // Create the GraphQL server
    const server = new ApolloServer({
        schema,
        context: ({ req }) => {
            return {
                token: req.headers.authorization,
                user: null
            };
        }
    });

    // Start the server
    const { url } = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
