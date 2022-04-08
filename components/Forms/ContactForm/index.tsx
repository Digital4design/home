import { CloudUploadIcon, UploadIcon } from "@heroicons/react/outline"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import FloatingLabelField from "../FloatingLabelField"

interface Inputs {
  first_name: string
  last_name: string
  email_address: string
  phone_number: string
  post_code: string
  message: string
  agreement: boolean
  development: string
}

export default function ContactForm() {
  const [developmentValue, setDevelopmentValue] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // use mail api to send data to home reach for perusal
      const toHomeReach = axios({
        method: "POST",
        url: "/api/mailer/contact",
        data: data,
      })

      // use mail api to send a confirmation email to the user based on the address they add in the email address field
      const userConfirmation = axios({
        method: "POST",
        url: "/api/mailer/contact-confirmation",
        data: {
          email: data.email_address,
        },
      })

      // promise both api calls
      const [toHomeReachResponse, userConfirmationResponse] = await Promise.all(
        [toHomeReach, userConfirmation]
      )
    } catch (error) {
      console.log("error sending email")
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setDevelopmentValue("")
    }
  }, [isSubmitSuccessful, reset])

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
          <select
            className="w-full border-b border-brand-grey-dark py-2 outline-none"
            {...register("development")}
            onChange={(e) => setDevelopmentValue(e.currentTarget.value)}
          >
            <option value="">Please select a development</option>
            <option value="Abbey Park - Thorney - Larkfleet">
              Abbey Park - Thorney - Larkfleet
            </option>
          </select>
        </div>

        {developmentValue !== "" && (
          <div className="mb-10 w-full px-2">
            <h3 className="mb-4 text-base">
              Have you already reserved a property at this development?
            </h3>
            <div className="flex items-center">
              <label htmlFor="radio-yes" className="mr-4">
                <input
                  type="radio"
                  className="mr-1 bg-black"
                  id="radio-yes"
                  name="reserved"
                />{" "}
                Yes
              </label>
              <label htmlFor="radio-no">
                <input
                  type="radio"
                  className="mr-1"
                  id="radio-no"
                  name="reserved"
                />{" "}
                No
              </label>
            </div>
          </div>
        )}

        <h3 className="px-2 text-base">Your message</h3>

        <FloatingLabelField label="Enter your message" fluid>
          <input
            className="input-has-float"
            placeholder="message"
            {...register("message", { required: true })}
          />
        </FloatingLabelField>

        <div className="w-full py-10 px-2">
          <button
            type="button"
            className="basic-transition flex items-center text-lg text-brand-green hover:text-brand-green-medium active:text-brand-blue"
          >
            <CloudUploadIcon className="mr-2 h-6 w-6" /> Upload files
          </button>
        </div>

        <div className="flex w-full items-center p-2 text-base text-brand-grey">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            id="agreement"
            {...(register("agreement"), { required: true })}
          />
          <label htmlFor="agreement" className="cursor-pointer">
            I agree to the usage and storage of my data, as outlined in the{" "}
            <a href="/privacy-policy">privacy policy</a>
          </label>
        </div>

        <footer className="mt-8 w-full">
          <button className="button" type="submit">
            Send your message
          </button>
        </footer>
      </form>
    </>
  )
}
