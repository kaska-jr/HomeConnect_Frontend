export const createError = (status: any, message: any): Error => {
    const err = new Error() as Error & { status?: any }; // Adding type for 'status'
    err.status = status;
    err.message = message;
    return err;
};
