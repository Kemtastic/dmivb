export function createEmailVerificationTemplate(verificationUrl: string, name: string) {
  return `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="padding: 40px 30px; text-align: center;">
            <h1 style="color: #000000; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                Verify Your Email Address
            </h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0;">
                Hello ${name},
            </p>
            
            <p style="color: #374151; font-size: 16px; margin: 0 0 30px 0;">
                To activate your account, please verify your email address by clicking the button below.
            </p>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin: 40px 0;">
                <a href="${verificationUrl}" 
                   style="display: inline-block; 
                          padding: 14px 32px; 
                          background-color: #000000; 
                          color: #ffffff; 
                          text-decoration: none; 
                          border-radius: 8px; 
                          font-weight: 600; 
                          font-size: 16px; 
                          transition: all 0.3s ease;
                          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);">
                    Verify My Email
                </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin: 30px 0 0 0; text-align: center;">
                This link will expire in 1 hour for security reasons.
            </p>
            
            <!-- Divider -->
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #6b7280; font-size: 14px; margin: 0; text-align: center;">
                If you weren't expecting this email, you can safely ignore it.
            </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This is an automated email, please do not reply.
            </p>
        </div>
    </div>
</body>
</html>
  `.trim()
}

export function createPasswordResetTemplate(resetUrl: string, name: string) {
  return `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="padding: 40px 30px; text-align: center;">
            <h1 style="color: #000000; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                Reset Your Password
            </h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0;">
                Hello ${name},
            </p>
            
            <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0;">
                You have requested a password reset for your account. Click the button below to create a new password.
            </p>
            
            <p style="color: #dc2626; font-size: 14px; margin: 0 0 30px 0; background-color: #fef2f2; padding: 12px; border-radius: 6px; border-left: 4px solid #dc2626;">
                <strong>Security Warning:</strong> If you did not make this request, please contact us immediately for the security of your account.
            </p>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin: 40px 0;">
                <a href="${resetUrl}" 
                   style="display: inline-block; 
                          padding: 14px 32px; 
                          background-color: #000000; 
                          color: #ffffff; 
                          text-decoration: none; 
                          border-radius: 8px; 
                          font-weight: 600; 
                          font-size: 16px; 
                          transition: all 0.3s ease;
                          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);">
                    Reset My Password
                </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin: 30px 0 0 0; text-align: center;">
                This link will expire in 1 hour for security reasons.
            </p>
            
            <!-- Divider -->
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #6b7280; font-size: 14px; margin: 0; text-align: center;">
                If you did not make this request, you can safely ignore this email.<br>
                Your password will not be changed.
            </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This is an automated email, please do not reply.
            </p>
        </div>
    </div>
</body>
</html>
  `.trim()
}