import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRightCircle } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <header className=" flex items-center justify-between p-5 lg:p-10 ">
        <div className=" flex ">
          <Image src="/images/logo.svg" width={100} height={100} alt="logo" />

        </div>

        <nav className="flex items-center justify-center gap-x-3 lg:gap-x-20 text-slate-500">
          <p>Features</p>
          <p>Team</p>
          <p>Sign in</p>
        </nav>
      </header>
      <main className=" grid grid-cols-1 lg:grid-cols-2 mt-10 gap-x-10  py-20 w-full p-5 lg:p-10">
        <div className=" hidden lg:flex flex-col  gap-y-5  items-start justify-center ">
          <div className=" text-4xl font-semibold">
            All your files in one secure location,accessible anywhere.
          </div>
          <p className=" text-base text-slate-500">
            Fylo stores your most important files in one secure location, Access <br />them wherever you need, share and collaborate with friends, family <br />and co-workers.
          </p>
          <div className=" flex items-center gap-x-8 ">
            <Input className=" w-96" placeholder="Enter your email" />
            <Button size="lg" className=" bg-blue-600">Get Started</Button>
          </div>
        </div>
        <div className=" w-full h-full relative ">
          <Image src="/images/illustration-1.svg" width={660} height={500} alt="illustration" />
        </div>
        <div className="  flex flex-col lg:hidden  gap-y-5  items-start justify-center ">
          <div className=" text-3xl font-semibold text-center mt-5" >
            All your files in one secure location,accessible anywhere.
          </div>
          <p className=" text-base text-slate-500 text-center">
            Fylo stores your most important files in one secure location, Access them wherever you need, share and collaborate with friends, family and co-workers.
          </p>
          <div className=" flex flex-col lg:flex-row items-center gap-x-8 w-full  gap-y-4 ">
            <Input className=" w-full" placeholder="Enter your email" />
            <Button size="lg" className=" bg-blue-600 w-full ">Get Started</Button>
          </div>
        </div>

      </main>
      <section className=" bg-mobile lg:bg-desktop bg-no-repeat bg-auto w-full h-full ">
        <main className=" grid grid-cols-1 lg:grid-cols-2 mt-8 gap-x-10  py-10  bg-[#F8F8FE] p-5 lg:p-10" >
          <div className=" hidden lg:flex flex-col  gap-y-5  items-start  ">
            <div className=" text-3xl font-semibold">
              Stay productive, wherever you are
            </div>
            <p className=" text-base text-slate-500">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs
            </p>
            <p className=" text-base text-slate-500">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!.
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2 my-3">
              <p className=" flex text-sm text-green-500  items-center justify-center  ">
                See how Fylo works <ArrowRightCircle className=" size-5 ml-2 fill-green-600 text-white" />
              </p>
              <Separator className=" bg-green-700 h-0.5" />
            </div>

            <Card className=" mr-80">
              <CardContent className=" mt-4">
                <Image src="/images/icon-quotes.svg" width={16} height={16} alt="quote" className=" py-2 " />
                <p className=" text-sm text-slate-500">
                  Flyo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine
                </p>
              </CardContent>
              <CardFooter className=" flex items-center justify-start gap-x-2">
                <div className=" relative rounded-full size-10">
                  <Image src="/images/avatar.jpg" alt="img" fill className=" rounded-full" />
                </div>
                <div className=" flex flex-col items-start justify-center">
                  <p className="  font-bold text-sm">
                    Kyle Burton
                  </p>
                  <p className="text-slate-500 text-xs">
                    Founder & CEO. Huddle
                  </p>
                </div>

              </CardFooter>
            </Card>

          </div>
          <div className=" w-full h-full relative  lg:items-center lg:justify-center ">
            <Image src="/images/illustration-2.svg" width={660} height={500} alt="illustration" />
          </div>
          <div className="  flex flex-col lg:hidden  gap-y-5  items-center justify-center ">
            <div className=" text-lg font-semibold items-center mt-5" >
              Stay productive, wherever you are
            </div>
            <p className=" text-base text-slate-500 text-center">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs
            </p>
            <p className=" text-base text-slate-500 text-center">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!.
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2 my-3">
              <p className=" flex text-sm text-green-500  items-center justify-center  ">
                See how Fylo works <ArrowRightCircle className=" size-5 ml-2 fill-green-600 text-white" />
              </p>
              <Separator className=" bg-green-700 h-0.5" />
            </div>

            <div className=" flex  items-center justify-center  px-6">
              <Card >
                <CardContent className=" mt-4">
                  <Image src="/images/icon-quotes.svg" width={16} height={16} alt="quote" className=" py-2 " />
                  <p className=" text-sm text-slate-500">
                    Flyo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine
                  </p>
                </CardContent>
                <CardFooter className=" flex items-center justify-start gap-x-2">
                  <div className=" relative rounded-full size-10">
                    <Image src="/images/avatar.jpg" alt="img" fill className=" rounded-full" />
                  </div>
                  <div className=" flex flex-col items-start justify-center">
                    <p className="  font-bold text-sm">
                      Kyle Burton
                    </p>
                    <p className="text-slate-500 text-xs">
                      Founder & CEO. Huddle
                    </p>
                  </div>

                </CardFooter>
              </Card>
            </div>
          </div>

        </main>
      </section>
      <section className=" flex items-center justify-center bg-[#575988] p-5 lg:p-10">
        <div className=" flex flex-col lg:flex-row items-center justify-center w-full">
          <div className=" w-full flex lg:items-center lg:justify-center">
            <div className=" flex flex-col items-center justify-center lg:items-start lg:justify-start py-10 px-8 lg:px-0 lg:pr-64 gap-y-3">
              <p className=" text-white text-2xl font-bold">
                Get early access today
              </p>
              <p className=" text-white text-xs text-center lg:text-start">
                It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.
              </p>
            </div>

          </div>
          <div className="  w-full flex items-center justify-center">

            <div className=" flex flex-col items-start w-full  gap-y-4  px-16 lg:px-0">
              <Input className=" w-full" placeholder="email@example.com" />

              <Button size="lg" className=" bg-blue-600 w-full lg:hidden ">Get Started For Free</Button>
              <Button size="lg" className=" bg-blue-600  hidden lg:flex ">Get Started For Free</Button>


            </div>
          </div>

        </div>

      </section>
      <section className=" flex flex-col lg:flex-row  bg-[#06043B] p-5 lg:p-10 lg:gap-x-52">
        <div className=" flex flex-col items-start justify-center text-white gap-y-4">
          <div className=" flex ">
            <Image src="/images/logo-f.svg" width={100} height={100} alt="logo" className="hidden lg:flex " />
            <Image src="/images/logo-f.svg" width={150} height={150} alt="logo" className=" lg:hidden" />
          </div>
          <div className=" flex items-center justify-center gap-x-4">
            <Image src="/images/icon-phone.svg" width={20} height={20} alt="logo" />
            <p className=" text-sm">Phone: +1-543-123-4567</p>
          </div>
          <div className=" flex items-center justify-center gap-x-4">
            <Image src="/images/icon-email.svg" width={20} height={20} alt="logo" />
            <p className=" text-sm">example@gmail.com</p>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start text-white mt-14 lg:mt-28 text-sm gap-y-4">
          <p> About us</p>
          <p>jobs</p>
          <p> Press</p>
          <p> Blogs</p>
        </div>
        <div className=" flex flex-col items-start justify-start text-white mt-14 lg:mt-28 text-sm gap-y-4">
          <p> Contact us</p>
          <p>Terms</p>
          <p> Privacy</p>
        </div>
        <div className=" flex flex-col items-center justify-center lg:items-start lg:justify-start text-white mt-14 lg:mt-28 text-sm ">
          <div className=" flex items-center justify-center gap-x-3">
            <FaFacebook />
            <AiFillTwitterCircle />
            <IoLogoInstagram />
          </div>
        </div>
      </section>

    </main>
  );
}
