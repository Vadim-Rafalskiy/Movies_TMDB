// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// import * as Query from "./resolvers/Query.js";

// // Отримання шляху до поточного файлу
// const __filename = fileURLToPath(import.meta.url);
// // Отримання шляху до каталогу поточного файлу
// const __dirname = path.dirname(__filename);

// const resolvers = {
//   Query,
// };

// const server = new ApolloServer({
//   typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
//   resolvers,
// });

// const { url } = await startStandaloneServer(server, {
//   context: async ({ req, res }) => ({
//     locale: req?.headers?.locale || "en-US",
//   }),
// });

// console.log(`🚀 Server ready at ${url}`);

//--------------------------------------------------------------------------------------

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

import * as Query from "./resolvers/Query.js";

// Отримання шляху до поточного файлу
const __filename = fileURLToPath(import.meta.url);
// Отримання шляху до каталогу поточного файлу
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers: { Query },
  csrfPrevention: "true",
  cache: "bounded",
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(express.static(path.join(__dirname, "../../client", "build")));
app.use(express.static("public"));
app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({
      locale: req?.headers?.locale || "en-US",
    }),
  })
);

app.get("/rest", (req, res) => {
  res.json({ data: "I work!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client", "build", "index.html"));
});

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT || 80 }, resolve)
);

console.log(
  `🚀 Server ready at http://localhost:${process.env.PORT || 80}${
    server.graphqlPath
  }`
);
