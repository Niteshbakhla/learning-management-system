import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api";
import type { LoginFormValues } from "../types";

export function useLogin() {
            return useMutation({
                        mutationFn: (values: LoginFormValues) => authApi.login(values),
            });
}           