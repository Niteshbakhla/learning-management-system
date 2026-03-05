
import { useMutation } from "@tanstack/react-query"
import { authApi } from "../api"
import { useRouter } from "next/navigation";


export const useLogout = () => {
            const router = useRouter();         
            return useMutation({
                        mutationFn: authApi.logout,
                        onSuccess: () => {
                                    router.push("/login")
                        }
            })
}