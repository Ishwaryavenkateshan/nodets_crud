import { ResponseParams, ResponseType } from "../models/responseModel"

export class ResponseData {
    handleResponse(data: ResponseParams): ResponseType {
        if (data.success) {
            return { status: data.code, data: data.data }
        } else if (!data.success) {
            return { status: 500, data: data.data }
        } else if (data.code && data.code === 401) {
            return { status: data.code, data: 'Unauthorized' }
        } else {
            return { status: data.code, data: data.data }
        }
    }
}
