module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  } 

  next(); // user was logged in, ok to continue to next middleware/request handler
}