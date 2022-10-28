import React from 'react';
import Button from "../components/base/Buttons/Button";
import H1 from "../components/base/Titles/H1";
import Input from "../components/base/Inputs/Input";
import Link from "../components/base/Links/Link";

export default function RegisterView(): JSX.Element {
  return (
    <div className="max-w-md w-2/3">
      <H1 className="mb-16">Inscrivez vous</H1>
      <form onSubmit={() => { }}>
        <Input
          label="Nom d'utilisateur"
          placeholder="toto"
          className="mb-4"
        />
        <Input
          label="Adresse email"
          placeholder="example@mail.fr"
          className="mb-4"
          type="email"
        />
        <Input
          label="Mot de passe"
          placeholder="****"
          className="mb-8"
          type="password"
        />
        <Link className="mb-4" to="/login">J&apos;ai déjà un compte</Link>
        <Button fullWidth>Je m&apos;inscris</Button>
      </form>
    </div>
  );
}
