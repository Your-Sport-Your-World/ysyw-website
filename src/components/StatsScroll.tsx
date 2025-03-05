import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./HoverDevCard";
import {FiBarChart2} from "react-icons/fi"; 
import { RiUserCommunityLine } from "react-icons/ri";
import { FaHandshake, FaRegEye } from "react-icons/fa";
import { SiGotomeeting } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card title={card.title} subtitle={card.subtitle} Icon={card.icon} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};



const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "115M+",
      subtitle: "Total followers, all platforms combined",
      icon: RiUserCommunityLine, 
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "2M+",
      subtitle: "Views per month",
      icon: FaRegEye, 
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "7B+",
      subtitle: "Engagements till now",
      icon: SiGotomeeting, 
      id: 3,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: "14.4%",
      subtitle: "Engagement rate on reach",
      icon: FiBarChart2, 
      id: 4,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: "500K+",
      subtitle: "Daily active users",
      icon: AiOutlineUsergroupAdd, 
      id: 5,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "3M+",
      subtitle: "New posts every month",
      icon: BiMessageDetail, 
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "1.2B+",
      subtitle: "Total impressions so far",
      icon: HiOutlineChartSquareBar, 
      id: 7,
    },
    {
      url: "/imgs/abstract/8.jpg",
      title: "99.9%",
      subtitle: "Uptime of our platform",
      icon: MdOutlineSecurity, 
      id: 8,
    },
    {
      url: "/imgs/abstract/9.jpg",
      title: "250+",
      subtitle: "Partnerships with brands",
      icon: FaHandshake, 
      id: 9,
    },
    {
      url: "/imgs/abstract/10.jpg",
      title: "10M+",
      subtitle: "Users engaging with content weekly",
      icon: IoIosPeople, 
      id: 10,
    },
  ];
  

export default HorizontalScrollCarousel;