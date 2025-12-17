const express = require("express");
const path = require("path");

const app = express();
print="helo"

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.json({
    message: "API endpoint working!",
    status: "success",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
