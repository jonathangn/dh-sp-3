// "use client";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Buttons() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <Button style={{ marginRight: 10 }} onClick={() => signOut()}>
                    Cerrar Sesión
                </Button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <Button style={{ marginRight: 10 }} onClick={() => signIn()}>
                Iniciar Sesión
            </Button>
        </>
    )
}

// export const RegisterButton = () => {
//     return (
//         <Link href="/register" style={{ marginRight: 10 }}>
//             Regístrarse
//         </Link>
//     );
// };

// export const ProfileButton = () => {
//     return <Link href="/profile">Profile</Link>;
// };
