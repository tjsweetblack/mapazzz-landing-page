"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { deleteAccountTranslations } from "@/data/deleteAccount";
import { useState, useEffect } from "react";

export default function DeleteAccountPage() {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const t = deleteAccountTranslations[language] || deleteAccountTranslations.pt;

  useEffect(() => {
    setIsClient(true);
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email.trim()) {
      setError(t.errors.emailRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t.errors.emailInvalid);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send the email to your backend
      console.log("Delete account request for:", email);
      
      setIsSubmitted(true);
      setEmail("");
    } catch {
      setError(t.errors.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    return (
      <>
        <Header />
        <Container className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl lg:mx-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h1>
                <p className="mt-2 text-lg text-gray-600"></p>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                <span className="text-primary">{t.title.split(" ")[0]}</span>{" "}
                {t.title.split(" ").slice(1).join(" ")}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-8">
                {t.description}
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      {t.success.title}
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>{t.success.message}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm font-medium text-green-800 hover:text-green-600"
                      >
                        {t.success.submitAnother}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      {t.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.form.emailPlaceholder}
                      className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.form.submitting}
                      </>
                    ) : (
                      t.form.submitButton
                    )}
                  </button>
                </form>
              </div>
            )}

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    {t.warning.title}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc pl-5 space-y-1">
                      {t.warning.items.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p className="mb-4">{t.additionalInfo.title}</p>
              <ul className="list-disc pl-5 space-y-2">
                {t.additionalInfo.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                {t.additionalInfo.contact.text}{" "}
                <a 
                  href={`mailto:${t.additionalInfo.contact.email}`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  {t.additionalInfo.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}