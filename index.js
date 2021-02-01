const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// Your root index.js connect function should still look like this:
// mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// http://localhost:5000/
