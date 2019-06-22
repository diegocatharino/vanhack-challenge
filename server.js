const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000

// Rewrite to the src path
const app = next({
  dev,
  dir: './src'
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });