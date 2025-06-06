const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const CreateCard = require( "./routes/CreateCardRoute")
const GetAllCardsRoute = require("./routes/GetAllCardsRoute");

dotenv.config();
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(cors());
app.use('/api/cards/', CreateCard)
app.use('/api/cards/', GetAllCardsRoute)



app.listen(port, () =>{
    console.log('Server is running on port ' + port);
})