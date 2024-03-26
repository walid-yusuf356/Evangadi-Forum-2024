const express = require('express')
const router = express.Router()
const { postAnswer, allAnswer } = require('../controller/answerController')


router.post("/post-answers", postAnswer)

router.get("/all-answers", allAnswer)

module.exports = router