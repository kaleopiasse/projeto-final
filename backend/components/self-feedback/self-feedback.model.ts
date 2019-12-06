import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';

import { PdiModel } from '../pdi/pdi.model';
import { PeriodModel } from '../period/period.model';

export interface SelfFeedback extends mongoose.Document {
  _id: string,
  pdi_id: ObjectID | PdiModel,
  questions: Question[],
}

export interface Question extends mongoose.Document {
  _id: string,
  key: number,
  description: string,
  answer: string,
}

export interface SelfFeedbackModel extends mongoose.Model<SelfFeedback> { }

const questionSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

const selfFeedbackSchema = new mongoose.Schema({
  pdi_id: {
    type: ObjectID,
    ref: 'Pdi',
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
})

export const SelfFeedback = mongoose.model<SelfFeedback, SelfFeedbackModel>('SelfFeedback', selfFeedbackSchema)