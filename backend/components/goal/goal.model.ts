import * as bcrypt from 'bcrypt';
import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';

import { PdiModel } from '../pdi/pdi.model';
import { PeriodModel } from '../period/period.model';

export interface Goal extends mongoose.Document {
  _id: string,
  description: string,
  validator: string,
  period_id: ObjectID | PeriodModel,
  pdi_id: ObjectID | PdiModel,
}

export interface GoalModel extends mongoose.Model<Goal> { }

const goalSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  validator: {
    type: String,
    required: true,
  },
  period_id: {
    type: ObjectID,
    ref: 'Period',
    required: true
  },
  pdi_id: {
    type: ObjectID,
    ref: 'Pdi',
    required: true,
  }
})

export const Goal = mongoose.model<Goal, GoalModel>('Goal', goalSchema)
