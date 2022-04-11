import { NextApiResponse } from "next"
import { NextApiRequest } from "next"
const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MC_TRANSACTIONAL_EMAIL_API_KEY
)

// This will use mailchimp transactional email to send a confirmation email to the user after they have filled in the contact page form

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get user email from request
  const user_email: string = req.body.email

  // mailchimp message template with text only. From email can be changed in env variables
  // Will need a paid mailchimp account transactional email plan in order to send FROM the email with the sending domain verified
  // Will need a paid mailchimp account transactional email plan to send TO any email address

  // Docs: https://mailchimp.com/developer/transactional/api/messages/send-new-message/

  const message = {
    from_name: "Home Reach",
    from_email: process.env.MC_CONTACT_SENDING_EMAIL,
    subject: "Thank you for getting in touch",
    text: "We will be in touch as soon as possible",
    to: [
      {
        email: user_email,
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
