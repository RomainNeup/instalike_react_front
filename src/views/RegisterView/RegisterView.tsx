import { Button, H1, Input, Link } from "../../components"

export function RegisterView(): JSX.Element {
    return (
        <div className="max-w-md w-2/3">
            <H1 className="mb-16">Inscrivez vous</H1>
            <form onSubmit={() => { }}>
                <Input
                    label="Nom d'utilisateur"
                    placeholder="toto"
                    className="mb-4"
                    v-model="username"
                />
                <Input
                    label="Adresse email"
                    placeholder="example@mail.fr"
                    className="mb-4"
                    v-model="email"
                />
                <Input
                    label="Mot de passe"
                    placeholder="****"
                    className="mb-8"
                    v-model="password"
                    type="password"
                />
                <Link className="mb-4" to="/login">J'ai déjà un compte</Link>
                <Button>Je m'inscris</Button>
            </form>
        </div>
    )
}