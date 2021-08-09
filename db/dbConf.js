const ATLAS = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster0.nqbbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const LOCAL = `mongodb://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@127.0.0.1:27017/todos`;

const url = process.env.NODE_ENV === "dev" ? LOCAL : ATLAS;

const params = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = {
  url,
  params,
};
