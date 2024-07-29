import express, { Router, Request, Response, NextFunction } from "express";
import User,{IUser} from '../models/users'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { createError } from "../utils/error";




export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, phoneNumber, password, role } = req.body;

        if (!username || !validator.isEmail(email) || !phoneNumber || !password) {
            
            return res.status(400).json({ status: "failed", message: "Missing required fields" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: "failed", message: "User already exists with this email" });
        }

        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            email,
            phoneNumber,
            password: hash,
            role: role || 'basic' // Set the default role here or adjust based on your requirements
        });

        await newUser.save();
        res.status(200).json({ status: "success", message: "User registered successfully" });
    } catch (error) {
        console.log("Error in registration:", error);
        res.status(500).json({ status: "failed", message: "Error registering user" });
    }
};


export const login =async (req:Request, res: Response, next:NextFunction) => {

    if (!req.body || !req.body.username &&!req.body.password){
        res.status(400).send("Please provide username and password")
    }
    

        try {
            if(validator.isEmail(req.body.email)){
                const user = await User.findOne({email: req.body.email}) 
                if(!user) return  res.status(500).json({status: "failed", message:"user not found"});

                const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
                if(!isPasswordCorrect) return next(createError(400, "password is incorrect"))

                const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT as string, {
                    expiresIn:'30m'
                })
                
                res.header("Authorization", `Bearer ${token}`).status(200).json({ status: "Login successful"} );
            } else {
                return res.status(400).json({error: "Invalid email format"})
            }
            
     
        } catch (error) {
            res.status(500).json({status: "failed", message:error});

        }
}

export const updateUserAsAdmin = async(req:Request, res:Response, next:NextFunction ) => {

    try{
        const { isAdmin} = req.body;
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            { $set: isAdmin },
            {new: true})
            if(updateUser){
                const { password, ...otherdata } = (updateUser.toObject() as IUser)
                res.status(200).json({...otherdata})
            }
            
    }catch (err){
        next(err)

    }
}

