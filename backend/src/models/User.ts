import * as ACTIONS from '@src/common/constants';
import { string } from 'joi';
import moment from 'moment';
import mongoose from 'mongoose';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate user keys.';

export enum UserRoles {
  Standard,
  Admin,
}


// **** Types **** //

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  role?: string;
  pwdHash: string;
  address: string;
  diabetes_type?: string[];
  note?: string;
}


const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(ACTIONS.USER_ROLES) },
  pwdHash: { type: String },
  address: { type: String },
  diabetes_type: { type: [String], default: null, enum: Object.values(ACTIONS.DIABETES_TYPE) },
  note: { type: String, default: null },

})

export const User = mongoose.model<IUser>('User', UserSchema);
export interface ISessionUser {
  id: number;
  email: string;
  name: string;
}




export const isUser = (obj: unknown): obj is IUser => {
  const user = obj as IUser;
  return (
    typeof user?.name === 'string' &&
    typeof user?.email === 'string' &&
    typeof user?.role === 'string' &&
    typeof user?.pwdHash === 'string' &&
    typeof user?.address === 'string' &&
    Array.isArray(user?.diabetes_type) &&
    typeof user?.note === 'string'
  );
}



// **** Export default **** //

export default {
  User,
  UserRoles,
  INVALID_CONSTRUCTOR_PARAM,
} as const;
