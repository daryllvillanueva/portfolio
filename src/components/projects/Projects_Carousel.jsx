import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6"
import { FiExternalLink } from "react-icons/fi"
import { Button } from "../ui/button"

const Projects_Carousel = () => {
  return (
    <Carousel className="w-full">
        <CarouselContent className="flex">
            <CarouselItem className="w-full flex justify-center">
                <Card className="w-full lg:w-4/5 overflow-hidden rounded-2xl">
                    <Link target='_blank' to="https://wp-homely.netlify.app/">
                        <img src="img/homely.png" alt="Homely" loading='lazy' className='h-auto w-full rounded-2xl'/>
                    </Link>
                    <CardContent className="flex flex-col items-center text-center gap-5 p-6">
                        <p className='text-muted-foreground text-sm w-[65%]'>
                            Welcome to Homely, your cozy real estate eCommerce platform! Finding your perfect home should feel as comfortable as your living room. Start your hassle-free home search today!
                        </p>
                        <div className='flex items-center justify-between w-full'>
                            <h1 className='text-2xl font-kodchasan_B bg-muted px-8 py-1 text-primary rounded-l-full rounded-br-full'>HOMELY</h1>
                            <ul className='flex items-center gap-4'>
                            <li><img src="img/html5.svg" alt="html" className='size-7'/></li>
                            <li><img src="img/tailwind.svg" alt="tailwind" className='size-7'/></li>
                            <li><img src="img/javascript.svg" alt="javascript" className='size-7'/></li>
                            <li><img src="img/wordpress.svg" alt="wordpress" className='size-7'/></li>
                            </ul>
                            <div className='flex items-center gap-4 font-kodchasan_R'>
                            <Link target='_blank' to="https://github.com/daryllvillanueva">
                                <Button variant="secondary" size="default" className="bg-secondary text-primary">
                                Source <FaGithub className='text-primary' style={{ height: '1.2rem', width: '1.2rem' }} />
                                </Button>
                            </Link>
                            <Link target='_blank' to="https://wp-homely.netlify.app/">
                                <Button variant="outline" size="default" className="bg-primary text-secondary">
                                Visit <FiExternalLink style={{ height: '1.2rem', width: '1.2rem' }} />
                                </Button>
                            </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </CarouselItem>
            <CarouselItem className="w-full flex justify-center">
                <Card className="w-full lg:w-4/5 overflow-hidden rounded-2xl">
                    <Link target='_blank' to="https://wp-homely.netlify.app/">
                        <img src="img/homely.png" alt="Homely" loading='lazy' className='h-auto w-full rounded-2xl'/>
                    </Link>
                    <CardContent className="flex flex-col items-center text-center gap-5 p-6">
                        <p className='text-muted-foreground text-sm w-3/4'>
                            Welcome to Homely, your cozy real estate eCommerce platform! Finding your perfect home should feel as comfortable as your living room. Start your hassle-free home search today!
                        </p>
                        <div className='flex items-center justify-between w-full'>
                            <h1 className='text-2xl font-black bg-muted px-8 py-1 text-primary rounded-l-full rounded-br-full'>HOMELY</h1>
                            <ul className='flex items-center gap-4'>
                            <li><img src="img/html5.svg" alt="html" className='size-7'/></li>
                            <li><img src="img/tailwind.svg" alt="tailwind" className='size-7'/></li>
                            <li><img src="img/javascript.svg" alt="javascript" className='size-7'/></li>
                            <li><img src="img/wordpress.svg" alt="wordpress" className='size-7'/></li>
                            </ul>
                            <div className='flex items-center gap-4'>
                            <Link target='_blank' to="https://github.com/daryllvillanueva">
                                <Button variant="secondary" size="default" className="bg-secondary text-primary">
                                Source <FaGithub className='text-primary' style={{ height: '1.2rem', width: '1.2rem' }} />
                                </Button>
                            </Link>
                            <Link target='_blank' to="https://wp-homely.netlify.app/">
                                <Button variant="outline" size="default" className="bg-primary text-secondary">
                                Visit <FiExternalLink style={{ height: '1.2rem', width: '1.2rem' }} />
                                </Button>
                            </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-primary" />
        <CarouselNext className="text-primary" />
    </Carousel>
  )
}

export default Projects_Carousel