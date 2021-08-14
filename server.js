const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express()
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
// Ticket Booking
const movieAppRoutes = require('./movieapp/routes');
app.use('/movieapp', movieAppRoutes);
app.get('/',  (req, res) => res.send('Welcome to Mock API!'));

app.use(function (err, req, res, next) {
    console.log("common error handler")
    console.error(err);
    res.json({errorMessage:err.message});
})

app.listen(port, () => console.log(`ProjectTracker api listening on port ${port}!`))