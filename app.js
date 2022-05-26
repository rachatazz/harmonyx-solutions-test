const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3010;

const app = express();
const apiRouter = require('./routes/api')

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send({ state: true, massage: "My Api." }));
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`server is running port ${PORT}`))