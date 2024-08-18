"use client"

import React from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link';

const CookieConsentBanner: React.FC = () => {
    const [cookieConsent, setCookieConsent] = React.useState<string | null>(Cookies.get("cookieConsent") || null);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [cookieTypes, setCookieTypes] = React.useState<{
        [key: string]: boolean;
    }>(JSON.parse(Cookies.get("cookiePreferences") || "{}"));

    const handleAccept = () => {
        Cookies.set("cookieConsent", "accepted");
        setCookieConsent("accepted");
    };

    const handleDeny = () => {
        Cookies.set("cookieConsent", "denied");
        setCookieConsent("denied");
        Cookies.remove("cookiePreferences");
        setCookieTypes({
            necessary: false,
            analytics: false,
            marketing: false,
        });
    };

    const handleManage = () => setShowModal(true);

    const handleCookieTypeChange = (type: string) => setCookieTypes((prevState) => ({
        ...prevState,
        [type]: !prevState[type],
    }));

    const handleSavePreferences = () => {
        const preferences = JSON.stringify(cookieTypes);
        Cookies.set("cookiePreferences", preferences);
        const allDisabled = Object.values(cookieTypes).every((value) => !value);
        setCookieConsent(allDisabled ? "denied" : "accepted");
        setShowModal(false);
    };

    if (cookieConsent === "accepted") {
        return null;
    } else if (cookieConsent === 'denied') {
        return null;
    }

    return (
        <div className='fixed bottom-5 left-5 right-5 bg-white text-black/70 p-4 rounded-xl shadow-xl text-sm'>
            <h2 className='text-center font-bold text-base mb-4'>Manage preferences</h2>
            <p className='text-center'>To provide the best experiences, we use technologies like cookies to store and/or access device information. Giving consent for these technologies allows us to process data like browsing behavior or unique IDs on this site. Not giving consent or withdrawing consent may negatively impact certain features and functionalities.</p>
            <div className='mt-4 w-full flex justify-center'>
                <button 
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-8 py-2 md:py-4 mr-2 rounded-md shadow-md'
                    onClick={handleAccept}
                >
                    Accept all 
                </button>
                <button 
                    className='bg-owlBrown/10 hover:bg-owlBrown/20 text-black/80 px-4 md:px-8 py-2 md:py-4 mr-2 rounded-md shadow-md'
                    onClick={handleDeny}
                >
                    Reject all 
                </button>
                <button 
                    className='bg-owlBrown/10 hover:bg-owlBrown/20 text-black/80 px-4 md:px-8 py-2 md:py-4 rounded-md shadow-md'
                    onClick={handleManage}
                >
                    Manage preferences 
                </button>
            </div>
            <div className='pt-4 w-full flex justify-center flex-row gap-4'>
                <Link href='/cookie-policy' arial-label='navigate to cookie policy page' className='text-blue-500 hover:text-blue-600 underline'>
                    Cookie policy (EU)
                </Link>
                <Link href='/privacy-policy' arial-label='navigate to cookie policy page' className='text-blue-500 hover:text-blue-600 underline'>
                    Privacy statement (EU)
                </Link>
                <Link href='/imprint' arial-label='navigate to cookie policy page' className='text-blue-500 hover:text-blue-600 underline'>
                    Imprint
                </Link>
            </div>
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70'>
                    <div className='bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-4'>
                        <h2 className='text-xl font-bold mb-4'>
                        Manage cookie preferences
                        </h2>
                        <p className='mb-4 text-md'>
                        To provide the best experiences, we use technologies like cookies to store and/or access device information. Giving consent for these technologies allows us to process data like browsing behavior or unique IDs on this site. Not giving consent or withdrawing consent may negatively impact certain features and functionalities.
                        </p>
                        <div>
                            <div className='flex items-center mb-2'>
                                <input
                                    type="checkbox"
                                    id="necessary"
                                    checked={true}
                                    onChange={() => handleCookieTypeChange("necessary")}
                                    className='mr-2'
                                    disabled
                                    aria-checked
                                />
                                <label
                                    htmlFor='necessary'
                                    className='text-blue-500 hover:underline cursor-pointer'
                                >
                                    Necessary cookies - Functional
                                </label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input 
                                    type='checkbox'
                                    id='analytics'
                                    checked={cookieTypes.analytics}
                                    onChange={() => handleCookieTypeChange("analytics")}
                                    className='mr-2'
                                />
                                <label
                                    htmlFor="analytics"
                                    className='text-blue-500 hover:underline cursor-pointer'
                                >
                                    Analytics cookies
                                </label>
                            </div>
                            <div className='flex items-center mb-4'>
                                <input
                                    type="checkbox"
                                    id='marketing'
                                    checked={cookieTypes.marketing}
                                    onChange={() => handleCookieTypeChange('marketing')}
                                    className='mr-2'
                                />
                                <label
                                    htmlFor='marketing'
                                    className='text-blue-500 hover:underline cursor-pointer'
                                >
                                    Marketing cookies
                                </label>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2'
                                    onClick={handleSavePreferences}
                                >
                                    Save preferences
                                </button>
                                <button
                                    className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded'
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CookieConsentBanner


