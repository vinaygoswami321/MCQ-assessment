var express = require('express');
const QuestionController= require('../controller/QuestionController');
var router = express.Router();



/* Questions. */
router.get('/Questions', QuestionController.getAllQuestion)
router.get('/approved-Questions', QuestionController.getApprovedQuestion)
router.post('/Question',QuestionController.createQuestion,err=>{
  console.log('error while signup user')
})
router.put('/question-details',QuestionController.createQuestionOrder,err=>{
  console.log('error while signup user')
})
router.put('/Question/:id',QuestionController.editQuestion,err=>{
  console.log('error while signup user')
})
router.put('/Question/:id',QuestionController.editQuestion,err=>{
  console.log('error while signup user')
})
router.put('/setApproved/:id',QuestionController.setApproved,err=>{
  console.log('error while signup user')
})


router.get('/Question/:id', QuestionController.getQuestionById)
router.delete('/Question/:id', QuestionController.deleteQuestion)


module.exports=router