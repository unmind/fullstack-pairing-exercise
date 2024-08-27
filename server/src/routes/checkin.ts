import DataAccessObject from "../libs/dataAccessObject";
import * as express from "express";

const checkin = (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.comment) {
      throw Error();
    }

    const record = DataAccessObject.addItem(req.body);

    res.send(record);
  } catch (error) {
    res.status(400).send();
  }
};

export default checkin;
