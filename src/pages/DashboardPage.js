import { useEffect } from "react"
import { useAuth } from "../AuthContext"
import { getUserInfo } from "../services/UserService"

function DashboardPage(){
   const auth = useAuth()

    return (
       <div>
        <h1>{auth.user.username}</h1>
       </div>
    )
}

export default DashboardPage