import express, { Router, Request, Response, NextFunction } from "express";
import User,{IUser} from '../models/users'
import { generateResetPassword } from '../utils/reset';
import { resetLink, sendResetEmail } from '../utils/mail';
import { createError } from "../utils/error";
import bcrypt from "bcryptjs"


export const updateUser = async(req:Request, res:Response, next:NextFunction ) => {

    try{

        const { isAdmin, ...updateData } = req.body;

        const updateUser = await User.findByIdAndUpdate(req.params.id,
            { $set: updateData },
            {new: true})
            if(updateUser){
                const { password, ...otherdata } = (updateUser.toObject() as IUser)
                res.status(200).json({...otherdata})
            }
            
    }catch (err){
        next(err)

    }
}

export const resetPasswordViaEmail = async(req:Request, res:Response, next:NextFunction ) => {

    try {
        const {email} = req.body
        const user = await User.findOne({email})
        if (!user) return res.status(404).json({ message: 'User not found' });

        const resetToken = await generateResetPassword(user._id) as string;
        const resetMail = await sendResetEmail(email, resetToken,"api/user/resetpassword");
        await resetLink(email, resetMail)
        res.json({ message: 'Password reset email sent',  resetMail}) ;
    } catch (error) {
        next(createError("failed", error))
    }
    
}

export const resetpassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({
            resetToken: req.params.resetToken,
            resetTokenExpires: { $gt: new Date() }
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid reset token" });
        }

        if (user.resetTokenExpires && user.resetTokenExpires < new Date()) {
            return res.status(401).json({ message: "Reset token has expired" });
        }

        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(req.body.password, salt);

        user.password = hash
        user.resetToken = undefined;
        user.resetTokenExpires = undefined;
        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (err) {
        console.error("Error in resetpassword:", err);
        res.status(500).json({ message: "An error occurred" });
    }
}


export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        await User.findByIdAndDelete(req.params.id);
     res.status(200).json("User has been deleted");    
    } catch (err) {
     next(err)
    } 
}


export const getUser = async (req:Request, res:Response, next:NextFunction ) => {
  
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
       } 
       catch (err) {
        next(err)
       } 
}

export const getUsers = async (req:Request, res:Response, next:NextFunction) => {
   
    try {
        const getUser = await User.find();
        res.status(201).json(getUser);
       } catch (err) {
        next(err)
       }  
} 