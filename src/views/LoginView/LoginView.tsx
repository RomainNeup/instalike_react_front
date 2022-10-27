import { Button, H1, Input , Link } from "../../components";
import React from "react";

export function LoginView(): JSX.Element {
    return (
        <div className="max-w-md w-2/3">
            <H1 className="mb-16">Connectez vous</H1>
            <form onSubmit={() => { }}>
                <Input
                    label="Nom d'utilisateur"
                    placeholder="toto"
                    className="mb-4"
                />
                <Input
                    label="Mot de passe"
                    placeholder="****"
                    className="mb-8"
                    type="password"
                />
                <Link className="mb-4" to="/register">Je n'ai pas de compte</Link>
                <Button>Je me connecte</Button>
            </form>
        </div>
    )
}