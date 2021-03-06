import Job from "../models/Job.js"
import { StatusCodes } from "http-status-codes"


const createJob =async (req,res)=>{
const {position,company} = req.body
if (!position || !company) {
    throw new Error('Please Provide All Values')
}
req.body.createdBy = req.user.userId
const job = await Job.create(req.body)
res.status(StatusCodes.CREATED).json({job})
}

const getAllJobs =async (req,res)=>{
    const jobs = await Job.find({ createdBy: req.user.userId })

    res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
    }
const deleteJob =async (req,res)=>{
        res.send('delete job')
        }
const updateJob =async (req,res)=>{
            res.send('update job')
            }
const showStats = async(req,res)=>{
    res.send('show stats')
}


export { createJob, deleteJob, getAllJobs, updateJob, showStats }