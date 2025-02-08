import homepage from "./index.html";

const server = Bun.serve({
  static: {
    "/": homepage,
  },
  port: process.env.PORT || 3000,
  development: true,
  fetch(_) {
    return new Response("Fallback response");
  },
});

console.log(`Listening on ${server.url}`);
