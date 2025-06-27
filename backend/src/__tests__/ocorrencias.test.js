const request = require("supertest");
const app = require("../index");
describe("API /ocorrencias", () => {
  it("deve criar e listar uma ocorrência", async () => {
    const ocorrencia = { titulo: "Teste", descricao: "Incêndio simulado" };
    const resPost = await request(app).post("/api/ocorrencias").send(ocorrencia);
    expect(resPost.statusCode).toBe(201);
    expect(resPost.body.titulo).toBe("Teste");

    const resGet = await request(app).get("/api/ocorrencias");
    expect(resGet.body.length).toBeGreaterThan(0);
  });
});