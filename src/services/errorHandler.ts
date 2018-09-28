import { INTERNAL_SERVER_ERROR } from "./httpResponse"

export default function errorHandler(res: any, error : any) {
    res
        .status(INTERNAL_SERVER_ERROR)
        .json({value: "There was an error processing your request.", error: error})
}