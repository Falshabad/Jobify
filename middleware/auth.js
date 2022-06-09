import jwt from "jsonwebtoken"

const auth = async (req,res,next) =>{
  const authheader = req.headers.authorization
  if (!authheader || !authheader.startsWith('Bearer')) {
    throw new Error('Authentication Invalid')
  }
  const token = authheader.split(' ')[1]
   
  try {
     const payload = jwt.verify(token,process.env.JWT_SECRET)
  // console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId }
     
    next()
  } catch (error) {
    throw new Error('Authentication Invalid')
  }

}

export default auth