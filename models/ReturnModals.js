import mongoose from 'mongoose';

const ReturnScheme = new mongoose.Schema(
  {
    returnItems: [
      {
        fullname: { type: String, required: true },
        adress: { type: String, required: true },
        employeeName: { type: Number, required: true },
        retunItem: { type: String, required: true },
        returnItemNo: { type: Number, required: true },
        Paid: { type: Number, required: true }
      },
    ]
}
)

const Return = mongoose.model('Return', ReturnScheme);
export default Return;
