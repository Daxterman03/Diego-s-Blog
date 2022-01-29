const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000; // Uses the variable in production but 5000 in dev mode

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get("/express_get", (req, res) => {
  res.send({ express: "Your express backend is connected to react" });
});
