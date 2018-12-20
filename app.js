const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@mahadevaya-s3h0d.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
, {useNewUrlParser: true}).then(() => {
  app.listen(5000, () => console.log("Aum Namah Shivaya: Server started at port 5000"));
}).catch(err => {
  console.log(err);
})
