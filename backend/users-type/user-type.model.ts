import * as mongoose from 'mongoose';

export interface UserType extends mongoose.Document {
  type: string
}

export interface UserTypeModel extends mongoose.Model<UserType> {}

const userTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  }
})

export const UserType = mongoose.model<UserType, UserTypeModel>('UserType', userTypeSchema)