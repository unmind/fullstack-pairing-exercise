import request from "supertest";
import app from "./app";
import dataAccessObject from "./libs/dataAccessObject";

beforeAll(() => {
  const mockDate = new Date("2022-01-01");
  jest.useFakeTimers("modern");
  jest.setSystemTime(mockDate);
});

beforeEach(() => {
  dataAccessObject.reset();
});

afterAll(() => {
  jest.useRealTimers();
});
describe("POST /check-in", () => {
  it("should record data for check-in", async () => {
    const res = await request(app).post("/checkin").send({
      comment: "I am happy",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      comment: "I am happy",
      created: "2022-01-01T00:00:00.000Z",
    });
  });

  it("should return 400 error when comment value is an empty string", async () => {
    const res = await request(app).post("/checkin").send({
      comment: "",
    });

    expect(res.statusCode).toEqual(400);
  });
});
