import app from "./app";

const port = 9000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening at http://localhost:${port}`);
});
