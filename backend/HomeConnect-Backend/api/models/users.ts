import mongoose, { Document, Schema } from 'mongoose';

type UserRole = 'realtor' | 'landowner' | 'spaceowner' | 'basic';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  phoneNumber: number;
  role?: UserRole;
  resetToken?: string;
  resetTokenExpires?: Date;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['realtor', 'landowner', 'spaceowner', 'basic'],
  },
  resetToken: String,
  resetTokenExpires: Date,
}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
