import * as express from "express";
import db from "../dbClient";
import {
  aggregatorService,
  notificationService,
  reportingService,
} from "../services";

const addCheckin = async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.comment) {
      throw Error();
    }

    const record = { comment: req.body.comment };

    db.exec(`
      INSERT INTO checkins
        (comment) 
      VALUES ('${record.comment}')
    `);

    await reportingService.reportNewCheckin(record);
    await notificationService.notify(record);
    await aggregatorService.updateStats(record);

    res.send(record);
  } catch (error) {
    res.status(400).send();
  }
};

export default addCheckin;
