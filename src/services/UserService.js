import { AxiosInstance } from "../AxiosInstance"

export const getUserInfo = async () => {
    const response =  await AxiosInstance.get("/api/user/me")
    console.log({response})
    return response
}