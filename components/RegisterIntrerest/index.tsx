import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  postCode: string;
  livingCircumstance: string;
};

function RegisterInterest() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="absolute top-0 left-0 z-999 flex h-full w-full items-center justify-center bg-brand-blue-transparent ">
      <div className="rounded bg-white p-6">
        <div className="mb-4 flex justify-between">
          <p className=" text-sm  font-bold text-brand-grey-dark">
            Register your interest
          </p>
          <div>X</div>
        </div>
        <p className="mb-4 font-light">
          Complete the form below to start your registration process.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="my-5 flex gap-5 ">
            <input
              {...register("firstName", { required: true })}
              placeholder="First name"
              className="active: w-72 border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none"
            />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last name"
              className="w-72 border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none"
            />
          </div>
          <div className="my-5 flex gap-5">
            <input
              {...register("email", { required: true })}
              placeholder="Email address"
              className="w-72 border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none"
            />
            <input
              {...register("phone", { required: true })}
              placeholder="Phone number"
              className="w-72 border-b border-brand-grey-dark pb-1 font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none"
            />
          </div>
          <div className="my-3 flex gap-5">
            <input
              {...register("postCode", {
                required: true,
                pattern:
                  / ([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
              })}
              placeholder="Post code"
              className="w-72 border-b border-brand-grey-dark font-light placeholder:text-brand-grey focus:border-brand-green focus:outline-none"
            />
            <div className="flex flex-col">
              <label className="text-xs text-brand-grey">
                Your living circumstance
              </label>
              <select
                {...register("livingCircumstance", { required: true })}
                placeholder="Phone number"
                className=" w-72 border-b border-brand-grey-dark font-light focus:border-brand-green focus:outline-none"
              >
                <option value="legend">Legend</option>
                <option value="hero">Hero</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Send your registration"
            className="w-fit cursor-pointer rounded-sm bg-brand-green py-3 px-8 text-white hover:bg-brand-green-dark"
          />
        </form>
      </div>
    </div>
  );
}

export default RegisterInterest;
