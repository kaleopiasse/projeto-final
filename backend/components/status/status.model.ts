import * as mongoose from 'mongoose';

export interface Status extends mongoose.Document {
  _id: string,
  key: number,
  description: string,
}

export interface StatusModel extends mongoose.Model<Status> {}

const statusSchema = new mongoose.Schema({
  key:{
    type: Number,
    required: true,
  },
  description:{
    type: String,
    required: true,
  }
})

export const Status = mongoose.model<Status, StatusModel>('Status', statusSchema)
