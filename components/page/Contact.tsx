import { Container, H1, Input } from "cllk";
import React from "react";

function Contact() {
  return (
    <>
      <Container className="dark:bg-zinc-800 bg-zinc-200 max-w-[600px] mx-auto flex justify-between p-5">
        <div className="w-6/12">
          <H1>Contatanme</H1>
        </div>
        <div className="w-6/12">
          <Input label="Nombre" />
          <Input label="Email" />
          <Input label="Description" />
        </div>
      </Container>
    </>
  );
}

export default Contact;
