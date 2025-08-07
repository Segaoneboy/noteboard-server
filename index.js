const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const CreateCard = require( "./routes/CreateCardRoute")
const GetAllCardsRoute = require("./routes/GetAllCardsRoute");
const AuthRoute = require("./routes/AuthRoute");
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
const port = process.env.PORT

app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use('/api/cards/', CreateCard)
app.use('/api/cards/', GetAllCardsRoute)
app.use('/api/auth/', AuthRoute)


app.listen(port, () =>{
    console.log('Server is running on port ' + port);
})