const mongoose = require('mongoose');
const { Schema } = mongoose;

// this object right here  describe all different properties we have
const userSchema = new Schema({
  googleId: String,
});

// telling mongoose we want creat a new collection called users
mongoose.model('users', userSchema);
