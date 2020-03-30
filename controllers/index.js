const codeZip = require ("../models/codeZip")

exports.getAllData=async(req,res)=>{
  const data =await codeZip.find()
  res.status(200).json({data})
}
exports.getDataZipCode=async(req,res)=>{
  const {codezip}=req.params
  const data= await codeZip.find({zip_code:codezip})
  res.status(200).json({data})
}
exports.getSettlements=async(req,res)=>{
  const {settlements}=req.params
  const data= await codeZip.find({"settlements.name":settlements})
  res.status(200).json({data})
}
exports.getZipCodeMuni=async(req,res)=>{
  const {municipality}=req.params
  const data= await codeZip.find({municipality:municipality})
  res.status(200).json({data})
}
exports.getZipCodeSettlements=async(req,res)=>{
  const {zipcode}=req.params
  const data= await codeZip.find({zip_code:zipcode},{"settlements.name":1})
  res.status(200).json({data})
}