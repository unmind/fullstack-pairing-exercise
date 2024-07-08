import * as express from "express";
import db from "../dbClient";
import {
  aggregatorService,
  notificationService,
  reportingService,
} from "../services";

const addCheckin = async (req: express.Request, res: express.Response) => {
  try {
    if (
      !req.body.rating ||
      typeof req.body.rating !== "number" ||
      req.body.rating < 1 ||
      req.body.rating > 4
    ) {
      throw Error();
    }

    const record = { rating: +req.body.rating, comment: req.body.comment };

    db.exec(`
      INSERT INTO checkins
        (rating, comment) 
      VALUES (${record.rating}, '${record.comment}')
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
