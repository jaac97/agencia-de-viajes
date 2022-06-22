import express from 'express';
const Router = express.Router();

Router.get("/api", (req, res) => {
    res.json({
        msg: "Aprendiendo alv"
    });
});
export default Router;