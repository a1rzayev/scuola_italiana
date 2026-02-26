import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Learn Italian with Scuola Italiana
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Italian courses for all levels, a welcoming café, and cultural events. 
              Discover the language and culture of Italy with qualified teachers and a vibrant community.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/services/course"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                View Courses
              </Link>
              <Link
                href="/contacts"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Courses • Café • <span className="text-indigo-600">Lingua</span> &amp; <span className="text-indigo-600">Cultura</span>
          </div>
        </div>
      </Container>
    </>
  );
}
