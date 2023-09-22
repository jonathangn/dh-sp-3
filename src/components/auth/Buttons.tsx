import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";

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
