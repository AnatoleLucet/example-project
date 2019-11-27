import helloWorld from "./helloWorld";
import * as express from "express";
import * as request from "supertest";

const init = () => {
  const app = express();
  app.use(helloWorld);
  return app;
};

describe("GET /", () => {
  it("It should 200 and return Hello World", async () => {
    const app = init();
    const res = await request(app).get("/jtest");

    expect(res.status).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });
});

