import request from "supertest";
import app from "./app";

describe("POST /check-in", () => {
  it("should record data for check-in", async () => {
    const res = await request(app).post("/checkin").send({
      rating: 3,
      comment: "I am happy",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      rating: 3,
      comment: "I am happy",
    });
  });

  it("should return 400 error when comment value is an empty string", async () => {
    const res = await request(app).post("/checkin").send({
      rating: undefined,
    });

    expect(res.statusCode).toEqual(400);
  });
});
