// const fs = require("fs");
// const path = require("path");
// const { ApolloServer } = require("apollo-server");
// const startStandaloneServer = require("@apollo/server/standalone");
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// const Query = require("./resolvers/Query");
import * as Query from "./resolvers/Query.js";

// Отримання шляху до поточного файлу
const __filename = fileURLToPath(import.meta.url);
// Отримання шляху до каталогу поточного файлу
const __dirname = path.dirname(__filename);

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
// server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
