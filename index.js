import express from 'express';
import router from "./router.js";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(express.static('static'))// for reading static folder, ex images in threr
app.use('/api',router);
app.use((err, req, res, next) => {
    res.status(500).json({error: err.message})
});

try {
    app.listen(PORT,() => {
        console.log('SERVER RUNNING IN PORT ' + PORT);
    })

} catch (e) {
    console.log(e)
}


