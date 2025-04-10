import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from '/header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import { image, link } from 'framer-motion/client'

 const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Al Qasim Travel Agency",
      link: "https://alqasimenterprises.co",
      image: "https://eccomerce-front-blush.vercel.app/website/alqasimenterprises-co.png"
    },
    {
      title: "Xford Store",
      link: "https://xford.com.pk",
      image: "https://eccomerce-front-blush.vercel.app/website/xford-pk.png"
    },
    {
      title: "Burhani Studios",
      link: "https://beta.burhanistudios.com/",
      image: "https://eccomerce-front-blush.vercel.app/website/beta-burhanistudios.png"
    },
    {
      title: "GSUK Org", 
      link: "https://gsuk.org/",
      image: "https://eccomerce-front-blush.vercel.app/website/gsuk-org.png"
    },
    {
      title: "Omega Lead Gen", 
      link: "https://omegaleadgen.com",
      image: "https://eccomerce-front-blush.vercel.app/website/omegaleadgen.png"
    },
    {
      title: "Amsterdamse Matrassen Centrale", 
      link: "https://amsterdamsematrassencentrale.nl",
      image: "https://eccomerce-front-blush.vercel.app/website/amsterdamsematrassencentrale-nl.png"
    },
    {
      title: "Haji YaQoob & Sons", 
      link: "https://hajiyaqoobandsons.com",
      image: "https://eccomerce-front-blush.vercel.app/website/hajiyaqoobandsons.png"
    },
    {
      title: "Eccomerce Store", 
      link: "https://eccomerce-front-blush.vercel.app",
      image: "https://eccomerce-front-blush.vercel.app/website/Eccomercestore.png"
    },

    
  ];

  export const testimonialsData = [
    {
        name: "Tariq Majeed",
        title: "Freelance Design Consultant",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQEyAFUAUqkXnQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685446225897?e=1748476800&v=beta&t=D-udaMA3SWxtoaFFyWoL59pTUGexcigd6o6tAwgH_lY",
        alt: "Freelance Design Consultant",
        rating: 5,
        text: "Hi, I'm Tariq, Founder of (tariqmajeed.com), as a design and web consultant since 2006. Rashid delivered outstanding website solutions for multiple projects (Al Qasim Travel Agency, Aline Perfect Clean, XFord, Burhan Studio, GSUK, Omega Leadgen, Amsterdam, Haji Yaqoob & Son's). His expertise, timely completion, and client-centric approach ensured satisfaction from both me and our clients. I highly recommend Rashid for website development and design needs."
    },
   
    {
        name: "Sehar Shahzadi",
        title: "Co-Founder of platinumwebagency.com",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQGyYMNvG37HuQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1667114508832?e=1743573600&v=beta&t=Eb4KpF8mp6nopBJhy2dRnmzfB1vqnPvWRwNZ8cJK0MA",
        alt: "Portrait of James Washington",
        rating: 5,
        text: "Rashid is an expert web developer working for my Agency www.platinumwebagency.com who recently completed a Wordpress website. His attention to detail and ability to replicate the functionalities of the original site, thesovereignkingdom.com, were impressive. With excellent communication and technical expertise, Rashid delivered a visually appealing and seamlessly functional website. I highly recommend Rashid for any web development needs."
    }
];

export default assets