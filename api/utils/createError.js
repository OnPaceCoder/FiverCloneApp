const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};


export const ErrorHandler = (err, req, res) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    res.status(errorStatus).json(errorMessage)
}


export default createError;