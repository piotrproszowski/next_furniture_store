import hero1 from "../../../public/images/pexels-denniz-futalan-339724-2704254.jpg";
import hero2 from "../../../public/images/pexels-denniz-futalan-339724-942572.jpg";
import hero3 from "../../../public/images/pexels-ogproductionz-15647593.jpg";
import hero4 from "../../../public/images/pexels-pixabay-70573.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const carouselImages = [hero1, hero2, hero3, hero4];

export default function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
