import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form
      className="flex flex-col max-w-xs mx-auto py-8 space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Name</label>
      <input
        className="border-b-[1px] border-b-slate-900"
        {...register("name", { required: true })}
      />
      <label>Email</label>
      <input
        className="border-b-[1px] border-b-slate-900"
        type="email"
        {...register("email", { required: true })}
      />
      <label>Message</label>
      <textarea
        className="h-24 border-[1px] border-slate-900 rounded"
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
