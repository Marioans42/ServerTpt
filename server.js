const express =  require('express');
const logger = require('morgan');
const db = require('./models/database');
const user = require('./routes/User.routes');
const game = require('./routes/Game.routes');
const profil = require('./routes/Profil.routes');
const friend = require('./routes/Friend.routes')
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cors = require('cors');


const app = express();
const port = process.env.PORT;

require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('combined'));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/api/user',user);
app.use('/api/game',game);
app.use('/api/profil',profil);
app.use('/api/friend', friend);

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

