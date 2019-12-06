import * as mongoose from 'mongoose';

import { PeriodModel } from './period.model';

export interface Period extends mongoose.Document {
  _id: string,
  key: number,
  description: string,
}

export interface PeriodModel extends mongoose.Model<Period> {}

const periodSchema = new mongoose.Schema({
  key:{
    type: Number,
    required: true,
  },
  description:{
    type: String,
    required: true,
  }
})

export const Period = mongoose.model<Period, PeriodModel>('Period', periodSchema)
