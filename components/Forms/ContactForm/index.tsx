import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import FloatingLabelField from "../FloatingLabelField"

interface Inputs {
  first_name: string
  last_name: string
  email_address: string
  phone_number: string
  post_code: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("first_name")) // watch input value by passing the name of it

  return (
    <>
      <h3 className="px-2 text-base">Your information</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
        <FloatingLabelField label="First Name">
          <input
            className="input-has-float"
            placeholder="First name"
            {...register("first_name")}
          />
        </FloatingLabelField>

        <FloatingLabelField label="Last Name">
          <input
            className="input-has-float"
            placeholder="Last name"
            {...register("last_name", { required: true })}
          />
        </FloatingLabelField>
        {/* errors will return when field validation fails  */}
        {errors.last_name && (
          <span className="text-red-500">This field is required</span>
        )}

        <FloatingLabelField label="Email address">
          <input
            className="input-has-float"
            placeholder="Email"
            {...register("email_address", { required: true })}
          />
        </FloatingLabelField>

        <FloatingLabelField label="Phone number">
          <input
            className="input-has-float"
            placeholder="Phone number"
            {...register("phone_number", { required: true })}
          />
        </FloatingLabelField>

        <FloatingLabelField label="Post code">
          <input
            className="input-has-float"
            placeholder="Postcode"
            {...register("post_code", { required: true })}
          />
        </FloatingLabelField>

        <div className="mb-4 w-full py-8 px-2">
          <h3 className="mb-4 text-base">
            Does your enquiry relate to a specific development we have available
            with Home Reach?
          </h3>
          <span className="block text-[14px] text-brand-grey">Development</span>
          <select className="w-full border-b border-brand-grey-dark py-2 outline-none">
            <option value="">Please select a development</option>
            <option value="Abbey Park - Thorney - Larkfleet">
              Abbey Park - Thorney - Larkfleet
            </option>
          </select>
        </div>

        <h3 className="px-2 text-base">Your message</h3>

        <FloatingLabelField label="Enter your message" fluid>
          <input
            className="input-has-float"
            placeholder="message"
            {...register("message", { required: true })}
          />
        </FloatingLabelField>

        <footer className="mt-8 w-full">
          <button className="button" type="submit">
            Send your message
          </button>
        </footer>
      </form>
    </>
  )
}
