import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import faker from "faker";

const Server = express();
const Router = express.Router();
const PORT = 3000;

Server.use(cors(), bodyParser.json());

Server.use(
  "/api",

  Router.get("/list", (req, res) => {
    const DATA = Array(100).fill().map(i => {
      return ({
          key: faker.random.uuid(),
          disabled: Math.random() < 0.5,
          href: 'https://ant.design',
          avatar: 'https://avatars.githubusercontent.com/u/1706070?s=460&v=4',
          name: faker.company.companyName(),
          owner: faker.name.lastName(),
          desc: faker.company.catchPhraseDescriptor(),
          callNo: faker.phone.phoneNumber('(###) ###-####'),
          status: faker.random.number({min: 0, max: 3}),
          updatedAt: faker.date.future(),
          createdAt: faker.date.recent(),
          progress: faker.random.number({min: 0, max: 100}),
      })
    })
    return res.status(201).json(DATA);
  }),

  Router.post("/fetch", (req, res) => {
    return res.status(201).json(req.body);
  })
);

Server.listen(PORT, console.log("Server listening on port %s!", PORT));
