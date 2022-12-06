const timeWord = require('./app');
const request = require("supertest")
const Time = require("./models/time")
describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe("timeword", () => {
  const time = {time: "14:10"}
  test("test the route", async () => {
    const resp = await request(timeWord)
      .post("/time")
      .send(time)
    expect(resp.statusCode).toEqual(200)
    expect(resp.body).toEqual({convertedTime: "It is two ten PM"})
  })
  test("test the model", async function () {
    let result = await Time.translate(time)
    expect(result).toEqual({ time: 'PM', hour: 'two', minutes: 'ten' })
  })
})


