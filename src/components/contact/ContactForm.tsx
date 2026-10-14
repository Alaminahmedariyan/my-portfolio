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

import { cardVariants } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

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
      className={cn(
        cardVariants({ interactive: false }),
        'min-w-0 space-y-5 p-5 sm:space-y-6 sm:p-8',
      )}
    >
      <div>
        <label htmlFor="contact-name" className="section-label mb-2 block">
          Full Name
        </label>

        <Input
          id="contact-name"
          {...register('name')}
          placeholder="Alamin Ahmed"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="section-label mb-2 block">
          Email Address
        </label>

        <Input
          id="contact-email"
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

      <div>
        <label htmlFor="contact-subject" className="section-label mb-2 block">
          Subject
        </label>

        <Input
          id="contact-subject"
          {...register('subject')}
          placeholder="Let's build something amazing..."
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="section-label mb-2 block">
          Message
        </label>

        <Textarea
          id="contact-message"
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