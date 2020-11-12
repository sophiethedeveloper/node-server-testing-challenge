const Cars = require("./carsModel");
const db = require("../data/dbConfig");

beforeEach(async () => {
  await db("cars").truncate();
});

describe("cars model", () => {
  describe("getAll", () => {
    it("gets an empty array", async () => {
      const cars = await Cars.getAll();
      expect(cars).toHaveLength(0);
    });

    it("gets all cars", async () => {
      await db("cars").insert({ name: "tesla" });
      let cars = await Cars.getAll();
      expect(cars).toHaveLength(1);

      await db("cars").insert({ name: "toyota" });
      cars = await Cars.getAll();
      expect(cars).toHaveLength(2);
    });
  });

  describe("add()", () => {
    it("can insert new cars", async () => {
      await Cars.add({ name: "Tesla" });
      let cars = await db("cars");
      expect(cars).toHaveLength(1);

      await Cars.add({ name: "Toyota" });
      cars = await db("cars");
      expect(cars).toHaveLength(2);
    });
  });
});
