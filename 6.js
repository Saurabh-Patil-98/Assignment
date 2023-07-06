// 6) For Node JS

// 1) use Passport.js for User creation and authentication

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure the local strategy for passport
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Find the user in the database and validate the password
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validatePassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// Serialize and deserialize user for session management
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// 2) Add middleware for Token

// Middleware function to check if the request has a valid token
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.sendStatus(401); // Unauthorized
    }
  
    // Verify the token using your preferred method (e.g., JWT verification)
  
    // If the token is valid, proceed to the next middleware
    next();
  };
  
  // Example usage: Apply the middleware to a specific route
  app.get('/protected-route', authenticateToken, (req, res) => {
    // Handle the protected route logic here
  });


// 3) Example for Promise.all, resolve , reject
const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Function 1 resolved');
      }, 2000);
    });
  };
  
  const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Function 2 resolved');
      }, 1500);
    });
  };
  
  const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Function 3 rejected');
      }, 1000);
    });
  };
  
  Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()])
    .then(results => {
      console.log(results);
    })
    .catch(error => {
      console.error(error);
    });


// 4) Example for Aggregate Lookup property
db.orders.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user'
      }
    }
  ]);


// 5) Example for populate on a array field (where show ref id in a array)

const postSchema = new Schema({
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }]
  });
  
  const Post = mongoose.model('Post', postSchema);
  
  // Populating the comments field with referenced Comment documents
  Post.findById(postId)
    .populate('comments')
    .exec(function(err, post) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(post);
    });

// 6) 4-5 Socket emit and On function example including socket connection.
// Emit an event to all listeners on the 'notifications' namespace
io.emit('notifications', { some: 'data' });

// Listen for an event on the 'notifications' namespace
io.on('notifications', (data) => {
    console.log(data);
});



 