import studentModel from "../models/studentrecordsSchema.js";

const getAllrecords = async(req, res) => {
    try {
        const data = await studentModel.find({})
        res.send(data)
    } catch (error) {
        console.log(error.message);   
    }
};

const createNewrecords = async(req, res) => {
   try {
        const {name,age,course,city} = req.body;
        const data = await studentModel({
          name: name,
          age: age,
          course: course,
          city: city,
        });
        if (data) {
          await data.save();
          console.log("New record Created...!");
        }
        res.send(data);
   } catch (error) {
        console.log(error.message);
        
   }
   
};
const updateRecords = async(req, res) => {
    try {
        const result = await studentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
        if(result){
            console.log("Record Updated...!");
        }
    } catch (error) {
        console.log(error.message);
        
    }
};
const DeleteRecords = async(req, res) => {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id)
        res.send(result)
        if(result){
            console.log("record Deleted");   
        }
    } catch (error) {
        console.log(error.message);
        
    }
   res.send("Delete Records by id");
};

export {getAllrecords , createNewrecords, updateRecords,DeleteRecords}