import { betterAuth } from "better-auth"
import { admin } from "better-auth/plugins"
import { prismaAdapter } from "better-auth/adapters/prisma"
import db from "./db"
import { sendEmail } from "./email"
import {
  createEmailVerificationTemplate,
  createPasswordResetTemplate,
} from "./email-templates"

export const auth = betterAuth({
  plugins: [admin()],
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      const htmlTemplate = createPasswordResetTemplate(url, user.name)
      await sendEmail({
        to: user.email,
        subject: "Reset Your Password",
        html: htmlTemplate,
      })
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const htmlTemplate = createEmailVerificationTemplate(url, user.name)
      await sendEmail({
        to: user.email,
        subject: "Verify Your Email Address",
        html: htmlTemplate,
      })
    },
    autoSignInAfterVerification: true,
  },
})
