/////////------ User SignUp ----////////////////
const QuestionOrder = require("../model/QuestionOrder");
const Question = require("../model/QuestionPool");


exports.getAllQuestion = async(req, res) => {
  //console.log(req.body);
  let response=await QuestionOrder.findOne({})
  console.log(response)
  Question.find({}).sort({ _id: -1 }).then(found => {
    res.status(201).json({ error: false, data: found, order: response })

  }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};
exports.getApprovedQuestion =async (req, res) => {
  //console.log(req.body);
 let response=await QuestionOrder.findOne({})
  Question.find({approved:true}).limit(response.numberOfQuestion).sort({ _id: -1 }).then(found => {
    res.status(201).json({ error: false, data: found, QuestionTime: response.timer,numberOfQuestion:response.numberOfQuestion })

  }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};
exports.getQuestionById = (req, res) => {
  //console.log(req.body);
  Question.findById(req.params.id).then(found => {
    res.status(201).json({ error: false, data: found,})

  }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};
exports.createQuestion = (req, res) => {
  //console.log(req.body);
  const QuestionDetails = req.body
  console.log(QuestionDetails)

  let newQuestion = new Question({...QuestionDetails})
  newQuestion.save().then(found => {
    res.status(201).json({ error: false, data: 'Created' }) 
    }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};
exports.createQuestionOrder = async(req, res) => {
  //console.log(req.body);
  const QuestionDetails = req.body
  console.log(req.body)
  let newQuestion = await QuestionOrder.findByIdAndUpdate({_id:'613de0631760965de8ce1019'},{...QuestionDetails})

    res.status(201).json({ error: false, data: 'Created' }) 
   
};
exports.editQuestion= (req, res) => {
  //console.log(req.body);
  const QuestionDetails = req.body

    Question.findByIdAndUpdate(req.params.id,{...QuestionDetails
  }).then(found => {
    res.status(201).json({ error: false, data: "Updated"})

  }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};
exports.setApproved= (req, res) => {

    Question.findByIdAndUpdate(req.params.id,{approved:req.body.approved
  }).then(found => {
    res.status(201).json({ error: false, data: "Updated"})

  }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};

exports.deleteQuestion = (req, res) => {
  //console.log(req.body);
  Question.findByIdAndDelete(req.params.id).then(found => {
   //deleteQuestionFromProduct(req.params.id)
    res.status(201).json({ error: false,data:"Deleted"  })

  }).catch(err => {
    res.status(503).json({ error: true, msg: "Something Went Wrong" })
  })
};
