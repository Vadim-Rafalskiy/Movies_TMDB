import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
// server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
