const app = require("../server");
const chai = require("chai");
const should = require("should");
const request = require("supertest");

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
      .get("/api/v1/5f98533a19a925402c73d47d")
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
    request(app)
      .patch("/api/v1/5f98533a19a925402c73d47d")
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
    request(app)
      .del("/api/v1/5f98533a19a925402c73d47d")
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
