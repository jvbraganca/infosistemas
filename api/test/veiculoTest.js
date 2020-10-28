const app = require("../server");
const should = require("should");
const request = require("supertest");
const Veiculo = require("../src/models/Veiculo")


const vehicleID = "5f98637413668f319048e951";

describe("GET /api/v1/", () => {
  it("should GET a list of all vehicle and respond with JSON", (done) => {
    request(app)
      .get("/api/v1/")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        res.status.should.be.equal(200);
        res.body.should.be.instanceOf(Object);
        done();
      });
  });
});

describe("POST /api/v1/", () => {
  it("should POST a new vehicle to DB and respond with JSON", (done) => {
    request(app)
      .post("/api/v1/")
      .send({
        placa: "HDK-3778",
        chassi: "57ALU882DYGCA5561",
        renavam: 11927280731,
        modelo: "Polo Sedan",
        marca: "Volkswagen",
        ano: 2020,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.status.should.be.equal(200);
        res.body.should.be.instanceOf(Object);
        return done();
      });
  });
});


describe("GET /api/v1/:vehicleId", () => {
  it("should GET a vehicle base on its ID and respond with a JSON", (done) => {
    request(app)
      .get(`/api/v1/${vehicleID}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.status.should.be.equal(200);
        res.body.should.be.an.instanceOf(Object);
        return done();
      });
  });
});

describe("PATCH /api/v1/:vehicleId", () => {
  it("should PATCH a vehicle base on its ID and responde with a JSON", (done) => {
    let vehicle = new Veiculo({
      placa: "HDK-3778",
      chassi: "57ALU882DYGCA5561",
      renavam: 11927280731,
      modelo: "Polo Sedan",
      marca: "Volkswagen",
      ano: 2020,
    });
    request(app)
      .patch(`/api/v1/${vehicle._id}`)
      .send({
        ano: 2021,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.status.should.be.equal(200);
        res.body.should.be.an.instanceOf(Object);
        return done();
      });
  });
});

describe("DELETE /api/v1/:vehicleId", () => {
  it("should DELETE a vehicle base on its ID and respond with a JSON", (done) => {
    let vehicle = new Veiculo({
      placa: "HDK-3778",
      chassi: "57ALU882DYGCA5561",
      renavam: 11927280731,
      modelo: "Polo Sedan",
      marca: "Volkswagen",
      ano: 2020,
    });
    request(app)
      .del(`/api/v1/${vehicle._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.status.should.be.equal(200);
        res.body.should.be.instanceOf(Object);
        return done();
      });
  });
});
