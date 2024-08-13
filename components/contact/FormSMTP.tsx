"use client";

import { useState } from 'react';
import { sendMailAction } from '@/utils/sendMailAction';

// Form fields interface
interface FormFields {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  postcode: string;
  houseNumber: string;
  message: string;
}

export const metadata = {
  title: 'Contact Form',
};

// Main component
export default function FormSMTP() {
  const [formValues, setFormValues] = useState<FormFields>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    postcode: '',
    houseNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is in the process of being submitted

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value ? '' : 'Full Name is required';
      case 'companyName':
        return value ? '' : 'Company name is required';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid e-mail address';
      case 'phone':
        return /^\d{9,10}$/.test(value) ? '' : 'Phone number must be 9 to 10 digits';
      case 'postcode':
        return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value) ? '' : 'Enter a valid Dutch postal code';
      case 'houseNumber':
        return value ? '' : 'Please enter house number';
      default:
        return '';
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid = Object.values(formErrors).every((error) => error === '') && Object.values(formValues).every((value) => value !== '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true); // Set submitting state to true

    try {
      const { name, companyName, phone, email, postcode, houseNumber, message } = formValues;

      await sendMailAction({
        name,
        email,
        companyName,
        phone,
        postcode,
        houseNumber,
        message,
      });

      setIsSubmitted(true); // Set submitted state to true on success
    } catch (error) {
      console.error('Failed to send message', error);
      // Optionally handle error state here, e.g., display an error message
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="text-lg w-full scroll-mt-24 snap-start scroll-smooth md:scroll-auto" id='fromStart'>
      {isSubmitted ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Thank you for your message!</h2>
          <p className="text-lg">We appreciate your inquiry and will get back to you shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col items-center justify-center gap-4 mx-auto w-full"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="formName" value="OwlWeb" />
          <input type="hidden" name="formURL" value="https://owlweb.nl/contact" />

          {/* Text Inputs */}
          {Object.entries(formValues).map(([name, value]) => (
            <div key={name} className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
              <input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors[name] ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                placeholder={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
              />
              {formErrors[name] && <p className="text-red text-xs">{formErrors[name]}</p>}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`submit-button relative inline-flex mt-2 h-12 overflow-hidden md:min-w-[250px] w-full rounded-xl leading-tight border-none ${isFormValid && !isSubmitting ? 'bg-owlOrange hover:bg-owlOrange/90' : 'bg-red/80 cursor-not-allowed'} text-white font-bold text-2xl transition-colors duration-300 relative`}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FDA800_0%,#883D07_50%,#FDA800_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-white hover:bg-owlOrange hover:text-owlBrown backdrop-blur-3xl gap-2`}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
