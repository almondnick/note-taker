const express = require('express');
const indexRoute = require('./routes/indexRoute');
const noteRoute = require('./routes/noteRoute');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(indexRoute);
app.use(noteRoute);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});