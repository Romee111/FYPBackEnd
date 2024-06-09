const jwt=require('jsonwebtoken')
exports.isLogin=async(req,res)=>{
  try{
    const token=req.body.token;
    if(!token){
        res.status(403).end("forbidden response")
    }
       const validate= jwt.verify(token,process.env.JWT_SECRET)
     if(!validate){
         res.status(403).end("forbidden response")
     }
     else{
         next()
     }
 
  }
  catch(err){
      console.log(err)
  }
}

exports.isForget=async(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            res.status(403).end("forbidden response")
        }
           const validate= jwt.verify(token,process.env.JWT_SECRET)
         if(!validate){
             res.status(403).end("forbidden response")
         }
         else{
             next()
         }
     
      }
      catch(err){
          console.log(err)
      }
  }

   exports.isReset=async(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            res.status(403).end("forbidden response")
        }
           const validate=await jwt.verify(token,process.env.JWT_SECRET)
         if(!validate){
             res.status(403).end("forbidden response")
         }
         else{
             next()
         }
     
      }

      catch(err){
          console.log(err)
      }
    }