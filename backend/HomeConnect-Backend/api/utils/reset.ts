import crypto from 'crypto'
import User from '../models/users';
import bcrypt from "bcryptjs"
import { createError } from './error';



export const generateResetPassword = async(userId: string)  => {
    try {
        const resetToken = crypto.randomBytes(20).toString('hex');
         await User.findByIdAndUpdate(userId, {
            resetToken,
            resetTokenExpires: new Date(Date.now() + 30 * 60 * 1000), // Token expires in 30 minutes
        }, { new: true });
        return resetToken;
    } catch (error) {
        createError('failed', error )
    }
}


// export const newPassword = async (resetToken: string, newPass: string) => {
//   try{  const user = await User.findOne({ resetToken, resetTokenExpires: { $gt: new Date() } });

//     if (!user) {
//         throw new Error('Invalid or expired reset token');
//     }
//     const salt = bcrypt.genSaltSync(12);
//     const hash = bcrypt.hashSync(newPass, salt);

//     user.password = newPass;
//     user.resetToken = undefined;
//     user.resetTokenExpires = undefined;
//     await user.save();
//     }
//     catch(error){
//         createError('failed', error)
//     }
// }