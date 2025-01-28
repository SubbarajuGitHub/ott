
const { connectDB, db } = require('./services/config');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
connectDB()

app.use('/movies',require('./routes/movie')); // Movie endpoint

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

