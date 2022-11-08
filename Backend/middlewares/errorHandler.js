import ErrorResponse from '../utils/errorResponse.js'

const errorHandler = (err, req, res, next) => {

    err.message = err.message || "Internal Server down"
    console.log(err);
    if (err.code === 11000) {
        const message = 'Dupliate field value enter'
        err = new ErrorResponse(message, 400)
    }

    if (err.name === 'validationError') {
        const message = Object.values(err.error).map((val) => val.message)
        err = new ErrorResponse(message, 400)
    }

    res.status(err.statusCode || 500).json({
        success: false,
        err: err.message || "Server error"
    })
}

export default errorHandler