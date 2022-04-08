import { NextApiResponse } from "next"
import { NextApiRequest } from "next"
const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MC_TRANSACTIONAL_EMAIL_API_KEY
)

interface FormData {
  first_name: string
  last_name: string
  email_address: string
  phone_number: string
  post_code: string
  message: string
  agreement: boolean | undefined
  development: string
}

// This will use mailchimp transactional email to send an email to Home Reach with the contact page form data

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get all form data passed through request
  const formData: FormData = req.body

  // Style out the HTML for the email
  let html = `<h1 style="font-size:18px; font-weight:600; margin-bottom:40px;">Information from your contact form</h1>`

  // Loop through form data object and style each field so it is readable for Home Reach
  for (const [key, value] of Object.entries(formData)) {
    html += `<div style="padding:10px 5px; border-bottom:1px solid #f7f7f7; margin-bottom:5px;"><b>${key}:</b> ${value}</div>`
  }

  html += `<div style="padding:20px 0;">This email was sent from your contact page</div>`

  /* mailchimp message template with HTML instead of text.
   ** From email can be changed in env variables
   ** Will need a paid mailchimp account transactional email plan in order to send FROM the email with the sending domain verified
   ** Will need a paid mailchimp account transactional email plan to send TO any email address
   ** Can add a BCC address with a BCC property which takes a string, one email only I believe
   ** Can add to the to array to send to more than one email if home reach want multiple staff members to receive,
   ** or they can set up forwarding on their address
   */

  // Docs: https://mailchimp.com/developer/transactional/api/messages/send-new-message/
  const message = {
    from_name: "Home Reach Contact Form",
    from_email: process.env.MC_CONTACT_SENDING_EMAIL,
    subject: "New response from your contact page",
    html,
    to: [
      {
        email: process.env.MC_CONTACT_RECIPIENT_EMAIL,
        type: "to",
      },
    ],
  }

  try {
    const response = await mailchimp.messages.send({ message })

    res.status(200).json({ message: "Email successfully sent!", response })
  } catch (error) {
    res.status(500).json({ error: "Some error occured" })
  }
}
