const express = require("express");
const router = express.Router();

router.get("/all-answers", (req, res) => {
    res.send("All answers");
}
);

module.exports = router;