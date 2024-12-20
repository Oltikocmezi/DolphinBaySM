import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
//import userRoute from "./routes/user.route.js";

const app = express();

// app.use("/api/test", (req, res) => {
//   res.send("It works");
// });
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("server is running");
});
