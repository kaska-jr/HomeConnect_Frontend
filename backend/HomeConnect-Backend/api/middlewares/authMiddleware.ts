import express, { Router, Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { createError } from "../utils/error";




export const verifyToken = (req:Request, res:Response, next:NextFunction)=> {
    const authHeader = req.headers.token as string;

    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return next(createError(401, "You are not authenticated"))

    jwt.verify(token, process.env.JWT as string,(err, user)=> {
        if(err) {
            return res.status(401).json({status:"failed", message: err})
            
        }

        req.body.user = user;
        next();
    })
};


export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    // verifyToken(req, res, () => { // Removed 'next' here
        const user = req.body.user;

        if (user.id === req.params.id || user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are unauthorized"));
        }
    // });
};


export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  
        if (req.body.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not admin"));
        }

};

