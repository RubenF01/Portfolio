import { useForm } from "react-hook-form";

const Form = ({ classes }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <form
      className={`flex flex-col max-w-sm 2xl:max-w-xl mx-auto py-8 space-y-3 lg:px-10 lg:pt-16 ${classes}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name">Name</label>
      <input
        name="name"
        className="border-b-[1px] border-b-slate-900"
        {...register("name", { required: true })}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className="border-b-[1px] border-b-slate-900"
        type="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        className="h-24 lg:h-36 2xl:h-52 border-[1px] border-slate-900 rounded"
        {...register("message", { required: true })}
      />
      <div className="flex justify-center">
        <input
          className="rounded-3xl bg-slate-800 text-white flex justify-center px-4 py-2"
          type="submit"
        />
      </div>
    </form>
  );
};

export default Form;
