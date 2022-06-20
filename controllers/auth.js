
function Login(req,res){
    res.status(200).json({message:"Login page"});
}

function Registration(req,res){
    res.status(200).json({message:"Registration page"});
}

module.exports = {Login,Registration};