import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';

import { User } from '../users/users.model';

export interface Pdi extends mongoose.Document {
  _id: string,
  date: Date,
  user_collaborator_id: ObjectID | User,
  user_sm_id: ObjectID | User
}

export interface PdiModel extends mongoose.Model<Pdi> {}

const pdiSchema = new mongoose.Schema({
  date:{
    type: Date,
    default: Date.now,
    required: true,
  },
  user_collaborator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user_sm_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
})

export const Pdi = mongoose.model<Pdi, PdiModel>('Pdi', pdiSchema)