import app from './app';
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('REST API is listening on port ' + port);
});
