const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbURI = process.env.DB_URI;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10
};

const defaultConnection = mongoose.connection;

defaultConnection.on('connected', () => {
  console.log('Database Connected!!!');
});

defaultConnection.on('error', (err) => {
  console.log(`Database Connection Error: ${err}`);
});

defaultConnection.on('disconnected', () => {
  console.log('Database Disconnected');
});

const connect = async () => {
  await mongoose.connect(dbURI, dbOptions);
};

module.exports = connect;