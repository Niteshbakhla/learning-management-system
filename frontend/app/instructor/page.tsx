"use client"

import { Button } from '@/components/ui/button'
import { useLogout } from '@/features/auth/hooks/useLogout'


const page = () => {
            const { mutate } = useLogout()
            return (
                        <div>
                                    <Button onClick={() => mutate()}>Log out</Button>
                        </div>
            )
}

export default page                             