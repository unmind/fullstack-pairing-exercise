import * as express from "express";
import db from "../dbClient";

const getHappyRatingsCount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const query = db.prepare(`
        SELECT COUNT(*)
        FROM checkins
    `);

    const checkins = query.all();

    res.send(checkins);
  } catch (error) {
    res.status(400).send();
  }
};

export default getHappyRatingsCount;
