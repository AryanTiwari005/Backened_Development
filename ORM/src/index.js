import PORT from "./Config/index.js";
import apiRoutes from "./Routes/index.js";
import express from "express";
const app = express();

app.use('/api',apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})