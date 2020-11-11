const app = require("../app"); // Link to your server file
const request = require("supertest");

describe("Authentication Suite", () => {
  const testUsername = 'joao';
  const testPassword = 'teste';
  const wrongTestPassword = 'jaime';

  let token;
  beforeAll((done) => {
    request(app)
      .post('/login')
      .send({
        username: testUsername,
        password: testPassword,
      })
      .end((err, response) => {
        token = response.body.token; // save the token!
        done();
      });
  });
  it("Token should be different if user logs in again", async (done) => {
    const response = await request(app)
      .post("/login")
      .type("json")
      .send({ username: testUsername, password: testPassword });
    expect(response.status).toBe(200);
    expect(response.body.token).not.toBe({token});
    done();
  });

  it("User login failed - wrong password", async (done) => {
    const response = await request(app)
      .post("/login")
      .type("json")
      .send({ username: testUsername, password: wrongTestPassword });
    expect(response.status).toBe(401);
    done();
  });
});