import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import Socials from './partials/Socials';

const formSchema = z.object({
  
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Must be a valid email address.",
  }),
  message: z.string().min(7, {
    message: "Message must be at least 7 characters.",
  }),

});

const ContactForm = () => {
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });
  
  const onSubmit = (data) => {
    const serviceID = 'service_dhejrm5';
    const templateID = 'template_nbda9e7';
    const userID = 'R3bfw3A9eD1NiEBk4';

    const templateParams = {
      to_name: 'Kenpachi', 
      from_name: data.username,
      message: data.message,
      from_email: data.email
    };

    emailjs.send(serviceID, templateID, templateParams, userID, data)
      .then((response) => {
        console.log('Email successfully sent!', response);
        toast.success('Successfully Sent!', {
          duration: 2000,
        });
        form.reset();
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        toast.error('Failed to send email. Please try again.', {
          duration: 2000,
        });
      });
  };  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input placeholder="Full Name" {...field} className="w-full"/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="w-full"/>
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message here..." {...field} className="resize-none"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Send
        </Button>
        <Toaster position="top-right" />
      </form>
      <div className='flex items-center justify-end'>
        <Socials/>
      </div>
    </Form>
  );
};

export default ContactForm;

