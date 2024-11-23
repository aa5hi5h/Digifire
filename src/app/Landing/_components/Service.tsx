import Image from "next/image"
import { WordPullUpDemo } from "../demos/word-pull-up";
import Service_1 from "../../assets/s_1.png"
import Service_2 from "../../assets/s_2.png"
import Service_3 from "../../assets/s_3.png"
import Service_4 from "../../assets/s_4.png"
import Service_5 from "../../assets/s_5.png"
import Service_6 from "../../assets/s_6.png"

const Services = () => {

    const services = [
        {
          icon: Service_6,
          title: "Web Design + Development",
          description:
            "Take your business to the next level with our web design and development services",
        },
        {
          icon: Service_1,
          title: "Search Engine Optimization",
          description:
            "Get your website to the top of search engine results with our SEO services",
        },
        {
          icon: Service_5,
          title: "Content Creation",
          description:
            "Boost your brand's online presence with our social media marketing services",
        },
        {
          icon: Service_3,
          title: "Social Media Marketing",
          description:
            "Interact with your customers and increase sales with our email marketing services",
        },
        {
          icon: Service_4,
          title: "Email Marketing",
          description:
            "With our content creation services, we help businesses drive results",
        },
        {
          icon: Service_2,
          title: "Pay-Per-Click Advertising",
          description:
            "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
        },
      ];
      

    return (
        <div className="md:px-0 mx-6 md:w-4/5 lg:w-[78%] my-20 md:mx-auto ">
          <WordPullUpDemo />
        
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your business stand out 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10">
  {services.map((service) => (
    <div
      key={service.title}
      className="flex flex-col justify-between h-full space-y-4 text-center border-slate-400 border p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
    >
      <Image
        src={service.icon}
        width={10000}
        height={10000}
        className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
        alt="image"
      />
      <h1 className="text-xl font-medium text-white">{service.title}</h1>
      <p className="text-gray-400">{service.description}</p>
    </div>
  ))}
</div>
        </div>
    )
}


export default Services