import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Phone, Mail, CalendarCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { BOOKING_URL, NAP } from '../lib/siteMeta';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

/*
 * EmailJS credentials come from the environment.
 *
 * This component previously called emailjs.sendForm with the literal strings
 * 'YOUR_SERVICE_ID' / 'YOUR_TEMPLATE_ID' / 'YOUR_PUBLIC_KEY'. Every submission
 * failed and the visitor was told "There was an error sending your message.
 * Please try again later" — which invited them to retry something that could
 * never work. The form is live on /contact, so this was a real lost-enquiry path.
 *
 * When the three variables are set, the form works exactly as before. When they
 * are not, we show the contact routes that genuinely do work rather than a form
 * that cannot deliver. Setting them in Netlify restores the form with no code
 * change. These are publishable EmailJS client keys by design, but they are not
 * committed here.
 */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailIsConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

const DirectContactChannels: React.FC = () => (
  <div className="space-y-3">
    <p className="text-neutral-700">
      The quickest way to reach Mugi is directly — messages are answered personally, usually the same day.
    </p>
    <a
      href={BOOKING_URL}
      className="flex items-center gap-3 rounded-lg border border-[#E6DAD2] bg-white p-4 transition-shadow hover:shadow-md"
    >
      <CalendarCheck className="h-5 w-5 flex-shrink-0 text-[#9A7B69]" />
      <span>
        <span className="block font-medium text-[#2D2D2B]">Request a consultation</span>
        <span className="block text-sm text-neutral-600">See real availability and book a time</span>
      </span>
    </a>
    <a
      href={NAP.telephoneHref}
      className="flex items-center gap-3 rounded-lg border border-[#E6DAD2] bg-white p-4 transition-shadow hover:shadow-md"
    >
      <Phone className="h-5 w-5 flex-shrink-0 text-[#9A7B69]" />
      <span>
        <span className="block font-medium text-[#2D2D2B]">{NAP.telephoneDisplay}</span>
        <span className="block text-sm text-neutral-600">Call or text with a question</span>
      </span>
    </a>
    <a
      href={`mailto:${NAP.email}`}
      className="flex items-center gap-3 rounded-lg border border-[#E6DAD2] bg-white p-4 transition-shadow hover:shadow-md"
    >
      <Mail className="h-5 w-5 flex-shrink-0 text-[#9A7B69]" />
      <span>
        <span className="block font-medium text-[#2D2D2B]">{NAP.email}</span>
        <span className="block text-sm text-neutral-600">Send photos of your current brows</span>
      </span>
    </a>
  </div>
);

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  if (!emailIsConfigured) {
    return <DirectContactChannels />;
  }

  /* emailjs.sendForm reads the DOM form directly, so the parsed values are not
     needed here — react-hook-form still owns validation. */
  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div aria-live="polite">
        {submitStatus === 'success' && (
          <div className="bg-green-50 p-4 rounded-lg flex items-center text-green-700">
            <CheckCircle size={20} className="mr-2" />
            <span>Thank you for your message! We'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 p-4 rounded-lg flex items-start text-red-700">
            <AlertCircle size={20} className="mr-2 flex-shrink-0" />
            <span>
              We couldn't send that message. Please call or text{' '}
              <a href={NAP.telephoneHref} className="underline">
                {NAP.telephoneDisplay}
              </a>{' '}
              or email{' '}
              <a href={`mailto:${NAP.email}`} className="underline">
                {NAP.email}
              </a>
              .
            </span>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
          name="name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          name="email"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          aria-invalid={errors.phone ? 'true' : undefined}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your phone number"
          {...register('phone', {
            required: 'Phone number is required',
          })}
          name="phone"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="How can we help you?"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          name="message"
        ></textarea>
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          id="consent"
          type="checkbox"
          required
          aria-invalid={errors.consent ? 'true' : undefined}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          className="mt-1 mr-2"
          {...register('consent', {
            required: 'You must agree to the privacy policy',
          })}
          name="consent"
        />
        <label htmlFor="consent" className="text-sm text-neutral-600">
          I consent to having this website store my submitted information so they can respond to my inquiry. See our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">
            privacy policy
          </a>{' '}
          to learn more about how we use data.
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="mt-1 text-xs text-red-500">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full flex items-center justify-center disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : (<><Send size={18} className="mr-2" /> Send Message</>)}
      </button>
    </form>
  );
};

export default ContactForm;
