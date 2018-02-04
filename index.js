const express = require('express');
const path = require('path')
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.static(path.resolve(__dirname, 'dist')));
app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
app.get('*', (request, response) => {
  if (app.get('env') !== 'development' && request.path.match(/\.(html|css|png|jpg|ttf|js|ico)$/)) {
    response.status(404).send('Not found');
  }
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});