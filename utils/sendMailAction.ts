"use server";

import { sendMail, compileThankYouTemplate } from '@/utils/mail';

interface SendMailParams {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  postcode: string;
  houseNumber: string;
  message: string;
}

export async function sendMailAction({
  name,
  email,
  companyName,
  phone,
  postcode,
  houseNumber,
  message,
}: SendMailParams) {
  const body = compileThankYouTemplate(name, companyName, phone, email, postcode, houseNumber, message);
  
  await sendMail({ to: email, cc: "owlweb.nl@gmail.com", name, subject: "Thank You for Your Partnership Inquiry", body });
}
