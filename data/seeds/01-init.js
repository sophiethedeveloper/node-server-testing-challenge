exports.seed = function (knex) {
  // Deletes ALL existing entries and resets ids
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        { name: "ford" },
        { name: "chevy" },
        { name: "honda" },
      ]);
    });
};
