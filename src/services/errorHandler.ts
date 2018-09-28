import httpStatus from 'http-status'

export default function errorHandler(res: any, error : any) {
    res.statusMessage = error
    res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({value: "There was an error processing your request.", error: error})
}