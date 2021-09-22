const mongoose = require(`mongoose`);
const express = require(`express`);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// I don't think this is necessary for just a backend, but it's here now!
app.use(express.static(`public`));

app.use(require(`./routes`));

// Not sure if this is necessary
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/pizza-hunt`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// this is required to log mongo queries that are executed
mongoose.set(`debug`, true);

app.listen(PORT, () => console.log(`Now running on localhost:${PORT}`));