"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Loader2, FileUp } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  serviceType: z.enum([
    "Installation",
    "Repair",
    "Removal",
    "Other",
  ]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles(imageFiles);
  };

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.honeypot) {
      console.log("Honeypot triggered");
      return;
    }

    setIsSubmitting(true);
    try {
      // Log form data (will be replaced with actual API call later)
      console.log("Form data:", data);
      console.log("Files:", files);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage(
        "Thank you! We've received your request and will contact you within 24 hours."
      );
      reset();
      setFiles([]);

      // Close modal after 2 seconds
      setTimeout(() => {
        onSuccess?.();
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
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
          Phone Number (optional)
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="(253) 555-0100"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        />
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
          Project Description *
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

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Attach Photos (optional)
        </label>
        <div className="relative">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition"
          >
            <FileUp className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {files.length > 0
                ? `${files.length} file(s) selected`
                : "Click to upload photos of your fence"}
            </span>
          </label>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Images only • Attach photos of your current fence or project area
        </p>
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
