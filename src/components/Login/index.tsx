import styles from "./Login.module.css";
import { ReactNode } from "react";
import Input from "../Input";
import Button from "../Button";

export default function Login() {
  return (
    <Wrapper>
      <Container>
        <Title />
        <Form>
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu email"
            autocomplete="email"
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            autocomplete="current-password"
          />
          <Button title="Enviar" />
        </Form>
        <RegisterInfo />
      </Container>
    </Wrapper>
  );
}

function Wrapper({ children }: { children: ReactNode }) {
  return <div className={styles.loginWrapper}>{children}</div>;
}

function Container({ children }: { children: ReactNode }) {
  return <div className={styles.loginContainer}> {children} </div>;
}

function Title() {
  return <h1 className={styles.loginTitle}>• Login •</h1>;
}

function Form({ children }: { children: ReactNode }) {
  return <form className={styles.loginForm}>{children}</form>;
}

function RegisterInfo() {
  return (
    <div className={styles.registerInfo}>
      <p>Ainda não tem uma conta?</p>
      <a href=""> Cadastrar-me</a>
    </div>
  );
}
