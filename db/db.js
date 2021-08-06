const url = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster0.nqbbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const params = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = {
  url,
  params,
};
