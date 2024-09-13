import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();
const app = express();

app.use(express.json());

// CORS options
const corsOptions = {
    origin: "https://helllo-world-deploy-1.onrender.com/",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Sample route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

const port = process.env.PORT || 5000;

// code for deployment

if (process.env.NODE_ENV === "production") {
    const dirpath = path.resolve();

    app.use(express.static("./client/dist"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirpath, "client/dist","index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
