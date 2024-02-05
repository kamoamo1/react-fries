// src/pages/ContactPage.tsx

import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <p>Name is required.</p>}

        <input {...register('email', { required: true })} placeholder="Email" />
        {errors.email && <p>Email is required.</p>}

        <textarea {...register('message', { required: true })} placeholder="Message" />
        {errors.message && <p>Message is required.</p>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
