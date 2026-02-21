"use client";
import { FC, useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { toast } from "../../../components/ui/toast";

interface FormProps {}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Form: FC<FormProps> = ({}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        message: "Please fill in all required fields correctly",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Console log the form data
      console.log("Form Data Submitted:", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent",
        message: "We will get back to you shortly",
        type: "success",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 gap-8 sm:gap-12 md:gap-16 rounded-2xl
        bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
    >
      <div className="flex flex-col gap-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <label className="text-text font-raleway text-base sm:text-lg font-medium">
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className={`py-2 px-3 rounded-xl border border-solid ${
                errors.firstName ? "border-red-400" : "border-gray-300"
              } bg-white/60 placeholder:font-raleway placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-text font-raleway text-base sm:text-lg`}
              placeholder="John"
            />
            {errors.firstName && (
              <span className="text-red-400 text-sm font-raleway">{errors.firstName}</span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-text font-raleway text-base sm:text-lg font-medium">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className={`py-2 px-3 rounded-xl border border-solid ${
                errors.lastName ? "border-red-400" : "border-gray-300"
              } bg-white/60 placeholder:font-raleway placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-text font-raleway text-base sm:text-lg`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <span className="text-red-400 text-sm font-raleway">{errors.lastName}</span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <label className="text-text font-raleway text-base sm:text-lg font-medium">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`py-2 px-3 rounded-xl border border-solid ${
                errors.email ? "border-red-400" : "border-gray-300"
              } bg-white/60 placeholder:font-raleway placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-text font-raleway text-base sm:text-lg`}
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <span className="text-red-400 text-sm font-raleway">{errors.email}</span>
            )}
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="text-text font-raleway text-base sm:text-lg font-medium">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`py-2 px-3 rounded-xl border border-solid ${
                errors.subject ? "border-red-400" : "border-gray-300"
              } bg-white/60 placeholder:font-raleway placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-text font-raleway text-base sm:text-lg`}
              placeholder="E-commerce Website"
            />
            {errors.subject && (
              <span className="text-red-400 text-sm font-raleway">{errors.subject}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text font-raleway text-base sm:text-lg font-medium">
            Your Message <span className="text-red-400">*</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full min-h-[150px] sm:min-h-[190px] p-4 sm:p-5 rounded-xl border border-solid ${
              errors.message ? "border-red-400" : "border-gray-300"
            } bg-white/60 placeholder:font-raleway placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-text font-raleway text-base sm:text-lg resize-vertical`}
            placeholder="Enter your message (minimum 10 characters)"
          />
          {errors.message && (
            <span className="text-red-400 text-sm font-raleway">{errors.message}</span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="self-center text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
