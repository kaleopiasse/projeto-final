import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';

import { environment } from '../common/environment';
import { validateCPF } from '../common/validators';
import { UserType } from '../users-type/user-type.model';

export interface User extends mongoose.Document {
  _id: string,
  name: string,
  email: string,
  password: string,
  birthday: Date,
  office: string,
  admissionDate: Date,
  lastChangePosition: Date,
  userType: Object,
  profiles: string[],
  matches(password: string): boolean,
  hasAny(...profiles: string[]): boolean
}

export interface UserModel extends mongoose.Model<User> {
  findByEmail(email: string, projection?: string): Promise<User>
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 80,
    minlength: 3
  },
  email: {
    type: String,
    unique: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  office: {
    type: String,
    required: true
  },
  admissionDate: {
    type: Date,
    required: true
  },
  lastChangePosition: {
    type: Date,
    required: false
  },
  userType: {
    type: Object,
    required: false
  },
  profiles :{
    type: [String],
    required: true
  }
})

userSchema.statics.findByEmail = function(email: string, projection: string){
  return this.findOne({email}, projection) //{email: email}
}

userSchema.methods.matches = function(password: string): boolean {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.hasAny = function(...profiles: string[]) : boolean {
  return profiles.some(profile => this.profiles.indexOf(profile)!== -1)
}

const hashPassword = (obj, next)=>{
  bcrypt.hash(obj.password, environment.security.saltRounds)
        .then(hash=>{
          obj.password = hash
          next()
        }).catch(next)
}

const saveMiddleware = function (next){
  const user: User = this
  if(!user.isModified('password')){
    next()
  }else{
    hashPassword(user, next)
  }
}

const updateMiddleware = function (next){
  if(!this.getUpdate().password){
    next()
  }else{
    hashPassword(this.getUpdate(), next)
  }
}

userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddleware)
userSchema.pre('update', updateMiddleware)

export const User = mongoose.model<User, UserModel>('User', userSchema)