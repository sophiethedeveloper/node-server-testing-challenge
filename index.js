require("dotenv").config();
const server = require("./server");

const PORT = process.env.PORT || 6000;

server.listen(PORT, () => {
  console.log(`\n server listening on port ${PORT}`);
});
