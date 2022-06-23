import express from 'express';
const Router = express.Router();

Router.get("/api", (req, res) => {
    res.json({
        msg: "Aprendiendo alv"
    });
});

Router.get('/year', (req, res) => {
/*     res.locals.unaVariable = "Nueva variable" */
    // console.log(res.locals);
    const year = new Date().getFullYear()
    res.json({
        year:year
 })
})


export default Router;