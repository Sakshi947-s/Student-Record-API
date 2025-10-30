import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  course: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
});

const studentModel = mongoose.model("studentsrecord",StudentSchema);

export default studentModel