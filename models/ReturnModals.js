import mongoose from 'mongoose';

const ReturnScheme = new mongoose.Schema(
  {
    returnItems: [
      {
        fullname: { type: String, required: true },
        adress: { type: String, required: true },
        employeeName: { type: String, required: true },
        retunItem: { type: String, required: true },
        returnItemNo: { type: String, required: true },
        Paid: { type: String, required: true },
        reason: { type: String, required: true }
      },
    ]
}
)

const Return = mongoose.model('Return', ReturnScheme);
export default Return;
