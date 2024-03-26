const express = require('express')
const router = express.Router()
const { postQuestion, allQuestion } = require('../controller/questionController')


router.post("/post-questions", postQuestion)

router.get("/all-questions", allQuestion)

module.exports = router