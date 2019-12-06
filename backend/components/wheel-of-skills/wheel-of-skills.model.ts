import { ObjectID } from 'bson';
import * as mongoose from 'mongoose';

import { PdiModel } from '../pdi/pdi.model';
import { PeriodModel } from '../period/period.model';

export interface WheelOfSkill extends mongoose.Document {
  _id: string,
  pdi_id: ObjectID | PdiModel,
  skills: Skill[],
  action_plan: {
    improve: string,
    howToImprove: string,
  }[],
}

export interface Skill extends mongoose.Document {
  _id: string,
  key: number,
  description: string,
  personalNote: number,
  objective: number,
  comments: string
}

export interface WhellOfSkillModel extends mongoose.Model<WheelOfSkill> { }

const skillsSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  personalNote: {
    type: Number,
    required: true,
  },
  objective: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  },
})

const wheelOfSkillSchema = new mongoose.Schema({
  pdi_id: {
    type: ObjectID,
    ref: 'Pdi',
    required: true,
  },
  skills: {
    type: [skillsSchema],
    required: true,
  },
  action_plan: {
    type: [],
    required: true,
  },
})

export const WheelOfSkill = mongoose.model<WheelOfSkill, WhellOfSkillModel>('WheelOfSkill', wheelOfSkillSchema)