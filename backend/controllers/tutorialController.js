const Tutorial = require("../models/tutorialmodel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createTutorial = catchAsyncErrors(async(req,res,next)=>{
    const tutorial = await Tutorial.create(req.body);
    res.status(201).json({
        success:true,
        tutorial

    })
});

exports.getAllTutorials = catchAsyncErrors(async(req,res) =>{
    
    const tutorial = await Tutorial.find();
    res.status(200).json({
        success:true,
        tutorial

    })
});

exports.getTutorialDetails =catchAsyncErrors (async (req, res, next) => {
    const tutorial = await Tutorial.findById(req.params.id);
  
    if (!tutorial) {
      return next(new ErrorHandler("tutorial not found", 404))
    }
  
    res.status(200).json({
      success: true,
      tutorial,
    });
  });