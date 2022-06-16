import Form from "../components/Form";
import Card from "../components/Card";
import { BsGithub } from "react-icons/bs";

export function FormSection({}) {
  return (
    <section className="mt-10 grid grid-flow-row justify-items-center gap-4">
      <h1 className="text-center text-4xl text-white my-6">
        Saiba mais sobre o projeto!
      </h1>
      <div className="grid gap-3 mt-4 mb-10">
        <Form />
        <Card text="Acesse o Github do Projeto!" link="">
          <BsGithub />
        </Card>
      </div>
    </section>
  );
}
