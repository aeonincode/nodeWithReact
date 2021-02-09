const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // req represent incoming request, res represent outgoing response
  app.get('/api/current_user', (req, res) => {
    // test to make sure that someone who has already gone to OAuth flow and in theory logged into our application and get access to user
    res.send(req.user);
  });
};
