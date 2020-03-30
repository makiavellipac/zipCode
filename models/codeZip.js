const {model , Schema}=require("mongoose");

const codeZip = new Schema(
    {
        zip_code:Number,
        locality:{
            type: String,
            min:1,
            max:50,
        },
        federal_entity:{
            type: String,
            min:1,
            max:50,
        },
        settlements:[
            {
              name:String,
              zone_type:String,
              code:String,
            }
          ],
        municipality:{
            type: String,
            min:1,
            max:50,
        },
    },
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model("codeZip",codeZip);