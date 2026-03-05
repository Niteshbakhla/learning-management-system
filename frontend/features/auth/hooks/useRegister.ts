import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authApi } from "../api";
import type { RegisterFormValues } from "../types";

export function useRegister() {
            return useMutation({
                        mutationFn: (values: RegisterFormValues) => authApi.register(values),
            });
}