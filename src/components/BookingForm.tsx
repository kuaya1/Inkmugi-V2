import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  consent: boolean;
}

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormData>();

  const selectedService = watch('service');

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus(null);
      
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      reset();
      setStep(3);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending booking request:', error);
      setSubmitStatus('error');
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const services = [
    {
      id: 'ombre-brows',
      name: 'Ombre Powder Brows',
      price: '$400',
      duration: '2-3 hours',
    },
    {
      id: 'touch-up',
      name: 'Brow Touch-Up',
      price: '$150',
      duration: '1-2 hours',
    },
    {
      id: 'Micro Shading',
      name: 'Micro Shading',
      price: '$500',
      duration: '2-3 hours',
    },
    {
      id: 'consultation',
      name: 'Brow Consultation',
      price: 'free',
      duration: '30 minutes',
    },
  ];

  const availableTimes = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  return (
    <div className="bg-white rounded-lg shadow-soft p-6 md:p-8">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            1
          </div>
          <span className="text-xs mt-1">Service</span>
        </div>
        <div className="flex-1 flex items-center">
          <div
            className={`h-1 w-full ${
              step >= 2 ? 'bg-primary' : 'bg-gray-200'
            }`}
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            2
          </div>
          <span className="text-xs mt-1">Details</span>
        </div>
        <div className="flex-1 flex items-center">
          <div
            className={`h-1 w-full ${
              step >= 3 ? 'bg-primary' : 'bg-gray-200'
            }`}
          ></div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            3
          </div>
          <span className="text-xs mt-1">Confirm</span>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        {submitStatus === 'error' && (
          <div className="bg-red-50 p-4 rounded-lg flex items-center text-red-700 mb-6">
            <AlertCircle size={20} className="mr-2" />
            <span>There was an error submitting your booking request. Please try again later.</span>
          </div>
        )}

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium mb-4">Select a Service</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="relative">
                  <input
                    type="radio"
                    id={service.id}
                    value={service.name}
                    className="sr-only"
                    {...register('service', { required: 'Please select a service' })}
                    name="service"
                  />
                  <label
                    htmlFor={service.id}
                    className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedService === service.name
                        ? 'border-primary bg-primary-light'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                        <div className="flex items-center mt-2 text-sm text-neutral-600">
                          <Clock size={14} className="mr-1" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      <div className="text-primary font-medium">{service.price}</div>
                    </div>
                    {selectedService === service.name && (
                      <div className="absolute top-2 right-2">
                        <Check size={16} className="text-primary" />
                      </div>
                    )}
                  </label>
                </div>
              ))}
            </div>
            
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
            
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={nextStep}
                disabled={!selectedService}
                className={`btn btn-primary ${
                  !selectedService ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Details and Date/Time */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium mb-4">Your Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    id="date"
                    type="date"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                    {...register('date', { required: 'Date is required' })}
                    name="date"
                  />
                  <Calendar size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>
                {errors.date && (
                  <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                  Preferred Time
                </label>
                <select
                  id="time"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.time ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('time', { required: 'Time is required' })}
                  name="time"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any special requests or information we should know"
                  {...register('notes')}
                  name="notes"
                ></textarea>
              </div>
            </div>
            
            <div className="flex items-start mt-4">
              <input
                id="consent"
                type="checkbox"
                className="mt-1 mr-2"
                {...register('consent', {
                  required: 'You must agree to the terms',
                })}
                name="consent"
              />
              <label htmlFor="consent" className="text-sm text-neutral-600">
                I understand that a $50 deposit is required to secure my appointment and will be applied to my service. Cancellations with less than 48 hours notice will forfeit the deposit.
              </label>
            </div>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-500">{errors.consent.message}</p>
            )}
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="btn btn-outline"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-medium text-green-600 mb-2">Booking Confirmed!</h3>
            <p className="text-neutral-600 mb-6">
              Thank you for booking with us. We've sent a confirmation email with all the details.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6 max-w-md mx-auto">
              <p className="text-sm text-neutral-600 mb-1">
                <span className="font-medium">Important:</span> Please arrive 10 minutes before your appointment time. A 48-hour cancellation policy applies.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setStep(1);
                reset();
              }}
              className="btn btn-primary"
            >
              Book Another Appointment
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;