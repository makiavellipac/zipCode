const {Router} = require('express');
const{
  getAllData,
  getDataZipCode,
  getSettlements,
  getZipCodeMuni,
  getZipCodeSettlements
}=require("../controllers/index")
const router =Router();
router
.get("/getData",getAllData)//Regresa toda la data
.get("/zipcode=:codezip",getDataZipCode)//Busca y regresa por codigo postal
.get("/zipcodeWithSettlements=:settlements",getSettlements)//busca por asentamientos y regresa el codigo postal
.get("/zipcodeWidtMunicipality=:municipality",getZipCodeMuni)//busca por municipio
.get("/settleMentsWidthZipcode=:zipcode",getZipCodeSettlements)//dado el codigo solo regresa los asentamientos con ese codigo

module.exports = router;
