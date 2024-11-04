import React from 'react'
import ContactForm from './ContactForm'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Contact = () => {
  return (
    <div className='padding pt-12 lg:pt-0 pb-20 lg:pb-0 lg:h-screen flex flex-col lg:flex-row gap-8 w-full items-center lg:justify-between bg-card'>
        <div className='w-full lg:w-1/3 space-y-3'>
          <h1 className='text-4xl font-black text-primary'>Leave a message.</h1>
          <p className='text-muted-foreground'>Hello There! I'm always open to collaboration and project opportunities. Don't hesitate to send me a message through my email or fill out the contact form next to this. I look forward to hearing from you!</p>
        </div>
        <Card className='w-full lg:w-1/2'>
            <CardHeader>
                <CardTitle className="text-primary text-xl">Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
                <ContactForm/>
            </CardContent>
        </Card>
        
    </div>
  )
}

export default Contact