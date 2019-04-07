const albums = require('express').Router();

//...

// Our app.use in the last file forwards a request to our albums router.
// So this route actually handles `/albums` because it's the root route when a request to /albums is forwarded to our router.
albums.get('/', function(req, res, next) {
  // res.send() our response here
});


// A route to handle requests to any individual album, identified by an album id
albums.get('/:albumId', function(req, res, next) {
  let myAlbumId = req.params.albumId;
  // get album data from server and res.send() a response here
});

//...

module.exports = albums;