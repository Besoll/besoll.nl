"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormFields {
  SingleLine: string; // Full Name
  SingleLine1: string; // Company Name
  Email: string;
  PhoneNumber_countrycode: string;
  SingleLine2: string; //PostCode
  SingleLine3: string; //House Number
  MultiLine: string;
  Website: boolean;
  SocialMedia: boolean;
  ContentCreator: boolean;
  Other: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormValues: FormFields = {
  SingleLine: '',
  SingleLine1: '',
  Email: '',
  PhoneNumber_countrycode: '',
  SingleLine2: '',
  SingleLine3: '',
  MultiLine: '',
  Website: false,
  SocialMedia: false,
  ContentCreator: false,
  Other: false,
};


const ZofoForm: React.FC = () => {

  const [formValues, setFormValues] = useState<FormFields>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'SingleLine':
        // error = value ? '' : 'Naam is verplicht';
        error = value ? '' : 'Full Name is required';

        break;
      case 'SingleLine1':
        // error = value ? '' : 'Bedrijfsnaam is verplicht';
        error = value ? '' : 'Company name is required';
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
      case 'SingleLine2':
        const zipcodeRegex = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;
        // error = zipcodeRegex.test(value) ? '' : 'Voer een geldige Nederlandse postcode in';
        error = zipcodeRegex.test(value) ? '' : 'Enter a valid Dutch postal code';
        break;
      case 'SingleLine3':
        // error = value ? '' : 'Bedrijfsnaam is verplicht';
        error = value ? '' : 'Please enter house number';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    let checked = false;
  
    if (event.target instanceof HTMLInputElement && event.target.type === 'checkbox') {
      checked = event.target.checked;
    }
  
    const error = validateField(name, value);
    setFormValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Validate all fields before submitting
    const errors: FormErrors = {};
    for (const [name, value] of Object.entries(formValues)) {
      const error = validateField(name, value.toString());
      if (error) {
        errors[name] = error;
      }
    }
    setFormErrors(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      return; // Prevent submission if there are errors
    }

    setIsSubmitted(true);
    // Submit form data
    // You can implement form submission logic here, e.g., using fetch API or Axios to post data asynchronously.
  };

  const isFormValid = Object.values(formErrors).every(error => error === '') && Object.values(formValues).every(value => value !== '' && value !== false);




  return (
    <div className=" text-lg w-full scroll-mt-24 snap-start scroll-smooth md:scroll-auto" id='fromStart'>
      {<style jsx global> {`                 
      `}
        </style>}
      <form 
        action="https://forms.zohopublic.com/bkavzharadze/form/OwlWebMain/formperma/UW4sYYC8tE2uCfdBIkccZ0O5UmIpkytipHQFDDKs_4k/htmlRecords/submit" 
        name='form' id='form' 
        method="POST" 
        acceptCharset="UTF-8" 
        encType="multipart/form-data" 
        className="flex flex-col items-center justify-center gap-4 mx-auto w-full"
        
      >
        {/* Hidden Inputs */}
        <input type="hidden" name="zf_referrer_name" value=""/>
        <input type="hidden" name="zf_redirect_url" value="https://owlweb/bedankt-pagina/"/>
        <input type="hidden" name="SingleLine4" value="OwlWeb" /> {/* FormName */}
        <input type="hidden" name="SingleLine5" value="https://owlweb.nl/contact" /> {/* URL */}
        <input type="hidden" name="SingleLine6" value="OwlWeb main" /> {/* AppName */}

        <div className="flex flex-col items-center justify-center w-full gap-1 md:gap-2 text-owlOrange">
          {/* Text Inputs */}
          <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
            
            <div className='flex flex-col md:flex-row items-center justify-center w-full gap-1 md:gap-8'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                  <input
                        type="text"
                        name="SingleLine"
                        value={formValues.SingleLine}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.SingleLine ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Full&#x20;Name"
                        disabled={isSubmitted}
                  />
                  {formErrors.SingleLine && <p className="text-red text-xs">{formErrors.SingleLine}</p>}
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                  <input
                        type="text"
                        name="SingleLine1"
                        value={formValues.SingleLine1}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.SingleLine1 ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Company&#x20;Name"
                        disabled={isSubmitted}
                  />
                  {formErrors.SingleLine1 && <p className="text-red text-xs">{formErrors.SingleLine1}</p>}
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
                        name="SingleLine2"
                        value={formValues.SingleLine2}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.SingleLine2 ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="Postcode"
                        disabled={isSubmitted}
                    />
                    {formErrors.SingleLine2 && <p className="text-red text-xs">{formErrors.SingleLine2}</p>}
                </div>

                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <input
                        type="text"
                        name="SingleLine3"
                        value={formValues.SingleLine3}
                        onChange={handleChange}
                        className={`file-input bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.SingleLine3 ? 'border-red' : 'file-input-bordered file-input-success relative'}`}
                        placeholder="House Number"
                        disabled={isSubmitted}
                    />
                    {formErrors.SingleLine3 && <p className="text-red text-xs">{formErrors.SingleLine3}</p>}
                </div>
            </div>


            <label>Choose the service</label>
            <div>
              <input type="checkbox" id="Checkbox_1" name="Checkbox" value="Website" />
              <label htmlFor="Checkbox_1">Website</label>
            </div>
            <div>
              <input type="checkbox" id="Checkbox_2" name="Checkbox" value="Social&#x20;Media" />
              <label htmlFor="Checkbox_2">Social Media</label>
            </div>
            <div>
              <input type="checkbox" id="Checkbox_3" name="Checkbox" value="Content&#x20;Creator" />
              <label htmlFor="Checkbox_3">Content Creator</label>
            </div>
            <div>
              <input type="checkbox" id="Checkbox_4" name="Checkbox" value="Other" />
              <label htmlFor="Checkbox_4">Other</label>
            </div>


            <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                <div className='flex flex-col items-center justify-center w-full gap-1 md:gap-2'>
                    <textarea
                        name="MultiLine"
                        rows={4} 
                        cols={50}
                        className={`file-textarea bg-purple/20 rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${formErrors.MultiLine ? 'border-red' : 'file-textarea-bordered file-textarea-success relative'}`}
                        placeholder="Add&#x20;shortly&#x20;what&#x20;do&#x20;you&#x20;expect&#x20;from&#x20;us..."
                    />
                    {formErrors.MultiLine && <p className="text-red text-xs">{formErrors.MultiLine}</p>}
                </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            // disabled={!isFormValid || isSubmitted}
            className={`submit-button relative inline-flex mt-2 h-12 overflow-hidden md:min-w-[250px] w-full rounded-xl leading-tight border-none ${isFormValid && !isSubmitted ? 'bg-owlOrange hover:bg-owlOrange/90' : 'bg-red/80 cursor-not-allowed'} text-white font-bold text-2xl transition-colors duration-300 relative`}
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
