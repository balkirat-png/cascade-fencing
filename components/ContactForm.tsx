"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number is required"),
  serviceType: z.enum([
    "Installation",
    "Repair",
    "Removal",
    "Other",
  ]),
  description: z.string().optional(),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "Installation",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.honeypot) {
      console.log("Honeypot triggered");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object
      const formData = new FormData();

      // Add form fields
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('serviceType', data.serviceType);
      formData.append('description', data.description || 'Not provided');

      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xdkrbang', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccessMessage(
          "Thank you! We've received your request and will contact you within 24 hours."
        );
        reset();

        // Close modal after 2 seconds
        setTimeout(() => {
          onSuccess?.();
          setSuccessMessage("");
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Formspree error:', response.status, errorData);
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try calling us directly at (253) 228-9101.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Success Message */}
      {successMessage && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm font-medium">{successMessage}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Your Name *
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Phone Number *
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="(253) 555-0100"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-900 mb-2">
          Service Type *
        </label>
        <select
          id="serviceType"
          {...register("serviceType")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        >
          <option value="Installation">Wood Fence Installation</option>
          <option value="Repair">Wood Fence Repair</option>
          <option value="Removal">Fence Removal</option>
          <option value="Other">Other</option>
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Project Description (optional)
        </label>
        <textarea
          {...register("description")}
          placeholder="Tell us about your project..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Honeypot Field */}
      <input
        {...register("honeypot")}
        type="hidden"
        style={{ display: "none" }}
      />

      {/* Submit Button */}
      <Button
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
            Submitting...
          </>
        ) : (
          "Get Your Free Estimate"
        )}
      </Button>
    </form>
  );
}
