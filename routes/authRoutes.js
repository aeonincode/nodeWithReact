const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    // send back some acknowledgement to user saying you are no longer signed anymore
    res.send(req.user);
  });

  // req represent incoming request, res represent outgoing response
  app.get('/api/current_user', (req, res) => {
    // test to make sure that someone who has already gone to OAuth flow and in theory logged into our application and get access to user
    res.send(req.user);
  });
};
