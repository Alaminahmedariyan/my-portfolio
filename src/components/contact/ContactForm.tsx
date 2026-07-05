'use client';

import { motion } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ContactSchema,
  ContactFormValues,
} from '@/lib/validations/contact';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message.');
      }

      toast.success('Message sent successfully! 🎉', {
        description:
          'Thank you for contacting me. I will get back to you within 24 hours.',
      });

      reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.';

      toast.error('Failed to send message', {
        description: message,
      });
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="bg-card space-y-6 rounded-3xl border p-8 shadow-sm"
    >
      {/* Full Name */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <Input
          {...register('name')}
          placeholder="Alamin Ahmed"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email Address
        </label>

        <Input
          type="email"
          {...register('email')}
          placeholder="you@example.com"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Subject
        </label>

        <Input
          {...register('subject')}
          placeholder="Let's build something amazing..."
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Message
        </label>

        <Textarea
          rows={7}
          {...register('message')}
          placeholder="Tell me about your project..."
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full text-base font-semibold"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending Message...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </div>
        )}
      </Button>
    </motion.form>
  );
}