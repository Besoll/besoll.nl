"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormFields {
  Name: string;
  Email: string;
  PhoneNumber_countrycode: string;
  PostCode: string; 
  CompanyName: string; 
  YourMassage: string; 
}

interface FormErrors {
  [key: string]: string;
}

const initialFormValues = {
  Name: '',
  Email: '',
  PhoneNumber_countrycode: '',
  PostCode: '',
  CompanyName: '',
  YourMassage: '',
};


const ZofoForm: React.FC = () => {

  const [formValues, setFormValues] = useState<FormFields>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'Name':
        // error = value ? '' : 'Naam is verplicht';
        error = value ? '' : 'Name is required';

        break;
      case 'Email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // error = emailRegex.test(value) ? '' : 'Voer een geldig e-mailadres in';
        error = emailRegex.test(value) ? '' : 'Enter a valid e-mail address';
        break;
      case 'PhoneNumber_countrycode':
        const phoneRegex = /^\d{9,10}$/;
        // error = phoneRegex.test(value) ? '' : 'Telefoonnummer moet 9 tot 10 cijfers zijn';
        error = phoneRegex.test(value) ? '' : 'Phone number must be 9 to 10 digits';
        break;
      case 'PostCode':
        const zipcodeRegex = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;
        // error = zipcodeRegex.test(value) ? '' : 'Voer een geldige Nederlandse postcode in';
        error = zipcodeRegex.test(value) ? '' : 'Enter a valid Dutch postal code';
        break;
      case 'CompanyName':
        // error = value ? '' : 'Bedrijfsnaam is verplicht';
        error = value ? '' : 'Company name is required';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setFormValues(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Check if there are any errors
    const hasErrors = Object.values(formErrors).some((error) => error !== '');
    if (hasErrors) {
      return; // Prevent submission if there are errors
    }

    setIsSubmitted(true);
    // Submit form data
    // You can implement form submission logic here, e.g., using fetch API or Axios to post data asynchronously.
  };

  const isFormValid = Object.values(formErrors).every((error) => error === '') && Object.values(formValues).every(value => value !== '');




  return (
    <div className=" text-lg w-full">
      {<style jsx global> {`                 
      `}
        </style>}
      <form 
        action="https://forms.zohopublic.eu/zongeschikt/form/LP002ZG84858966Flatroof/formperma/OL6urq_PIZl8yzemoMUPb_o5h2rPR_TeyGpR65gPKYM/htmlRecords/submit" 
        method="POST" 
        acceptCharset="UTF-8" 
        encType="multipart/form-data" 
        className="flex flex-col items-center justify-center gap-4 mx-auto w-full"
        
      >
        {/* Hidden Inputs */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="https://owlweb/bedankt-pagina/" />
        <input type="hidden" name="PhoneNumber_countrycodeval" value="+31" />
        <input type="hidden" name="FormName" value="OwlWeb" />
        <input type="hidden" name="URL" value="https://owlweb.nl" />
        <input type="hidden" name="AppName" value="Next.JS OwlWeb" />

        <div className="flex flex-col items-center justify-center w-full gap-1 md:gap-2 text-owlOrange">
          {/* Text Inputs */}
          <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
            <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="Name"
                        value={formValues.Name}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.Name ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Name"
                        disabled={isSubmitted}
                    />
                    {formErrors.Name && <p className="text-red text-xs">{formErrors.Name}</p>}
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center w-full gap-1 md:gap-8'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="PhoneNumber_countrycode"
                        value={formValues.PhoneNumber_countrycode}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.PhoneNumber_countrycode ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Phone"
                        disabled={isSubmitted}
                    />
                    {formErrors.PhoneNumber_countrycode && <p className="text-red text-xs">{formErrors.PhoneNumber_countrycode}</p>}
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="Email"
                        value={formValues.Email}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.Email ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Email"
                        disabled={isSubmitted}
                    />
                    {formErrors.Email && <p className="text-red text-xs">{formErrors.Email}</p>}
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center w-full gap-1 md:gap-8'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="PostCode"
                        value={formValues.PostCode}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.PostCode ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Postcode"
                        disabled={isSubmitted}
                    />
                    {formErrors.PostCode && <p className="text-red text-xs">{formErrors.PostCode}</p>}
                </div>

                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="CompanyName"
                        value={formValues.CompanyName}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.CompanyName ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Company Name"
                        disabled={isSubmitted}
                    />
                    {formErrors.CompanyName && <p className="text-red text-xs">{formErrors.CompanyName}</p>}
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <textarea
                        name="YourMassage"
                        rows={4} 
                        cols={50}
                        className={`file-textarea bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.YourMassage ? 'border-red' : 'file-textarea-bordered file-textarea-success relative'}`}
                        placeholder="Your Massage"
                    />
                    {formErrors.YourMassage && <p className="text-red text-xs">{formErrors.YourMassage}</p>}
                </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitted}
            className={`submit-button relative inline-flex h-12 overflow-hidden md:min-w-[250px] w-full rounded-xl leading-tight border-none ${isFormValid && !isSubmitted ? 'bg-owlOrange hover:bg-owlOrange/90' : 'bg-owlOrange/80 cursor-not-allowed'} text-white font-bold text-2xl transition-colors duration-300 relative`}
          >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FDA800_0%,#883D07_50%,#FDA800_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-white hover:bg-owlOrange hover:text-owlBrown backdrop-blur-3xl gap-2`}>
                {isSubmitted ?
                "message sent successfully" : "Submit" }

              </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZofoForm;
