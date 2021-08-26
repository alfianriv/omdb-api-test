const app = require("../index");
const supertest = require("supertest");
const { response } = require("..");

test("GET /api/search", async () => {
  await supertest(app)
    .get("/api/search?search=Batman")
    .expect(200)
    .then(response => {
      expect(Array.isArray(response.body.data)).toBeTruthy();
      expect(response.body.success).toBe(true);
    });
});

test("GET /api/detail", async () => {
  await supertest(app)
    .get("/api/detail/tt4154664")
    .expect(200)
    .then(response => {
      expect(typeof response.body === "object").toBeTruthy();
      expect(response.body.success).toBe(true);
    });
});
