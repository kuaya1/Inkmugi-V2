import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

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

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {submitStatus === 'success' && (
        <div className="bg-green-50 p-4 rounded-lg flex items-center text-green-700">
          <CheckCircle size={20} className="mr-2" />
          <span>Thank you for your message! We'll get back to you soon.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 p-4 rounded-lg flex items-center text-red-700">
          <AlertCircle size={20} className="mr-2" />
          <span>There was an error sending your message. Please try again later.</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
          name="name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
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
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
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
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
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
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          id="consent"
          type="checkbox"
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
        <p className="mt-1 text-xs text-red-500">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary w-full flex items-center justify-center ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message <Send size={16} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;