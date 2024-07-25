import * as express from "express";
import db from "../dbClient";

const importCheckins = async (req: express.Request, res: express.Response) => {
  try {
    const records = (req.body.records as { importComment: string }[]).map(
      ({ importComment }) => ({
        comment: importComment,
      })
    );

    let insert = db.prepare("INSERT INTO checkins (comment) VALUES (?)");

    records.forEach(({ comment }) => insert.run(comment));

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send();
  }
};

export default importCheckins;
