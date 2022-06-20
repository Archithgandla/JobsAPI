
function getAllJobs(req,res){
    res.status(200).json({message:"Get ALl Jobs"});
} 


function getJob(req,res){
    res.status(200).json({message:"Get particular job"});
}


function createJob(req,res){
    res.status(200).json({message:"Create job"});
}


function updateJob(req,res){
    res.status(200).json({message:"Update job"});
}

function deleteJob(req,res){
    res.status(200).json({message:"Delete job"});
}

module.exports = {getAllJobs,getJob,createJob,updateJob,deleteJob};