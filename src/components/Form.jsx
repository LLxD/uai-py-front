import { useForm } from "react-hook-form";
import { BsMailbox2 } from "react-icons/bs";
import Card from "../components/Card";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      className="grid grid-flow-row gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        className="p-2 rounded"
        placeholder="Nome Completo"
        {...register("Full Name", { required: true, maxLength: 200 })}
      />
      <input
        type="text"
        className="p-2 rounded"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <Card
        className="mt-5"
        type="submit"
        text="Envie um email pra gente!"
        link=""
      >
        <BsMailbox2 />
      </Card>
    </form>
  );
}
