import * as express from "express";
import db from "../dbClient";

const importCheckins = async (req: express.Request, res: express.Response) => {
  try {
    const records = (
      req.body.records as { importRating: Number; importComment: string }[]
    ).map(({ importRating, importComment }) => ({
      rating: importRating,
      comment: importComment,
    }));

    let insert = db.prepare(
      "INSERT INTO checkins (rating, comment) VALUES (?, ?)"
    );

    records.forEach(({ rating, comment }) => insert.run(rating, comment));

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send();
  }
};

export default importCheckins;
