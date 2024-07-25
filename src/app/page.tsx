import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from '../../public/282599.webp';
import design from '../../public/living-room-1853203_640.jpg';
import code from '../../public/laptop-1839876_640.jpg';
import consulting from '../../public/keys-2114363_640.webp';
import png1 from '../../public/siivous.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jari Peltole Portfolio</title>
        <meta name="description" content="Generated"></meta>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="text-center md:text-center">
        <section className="bg-[url('https://cdn.pixabay.com/photo/2023/07/19/06/19/ai-generated-8136169_640.png')] h-screen bg-cover bg-center opacity-92">
          <nav className="p-5 md:p-10 mb-12 flex justify-between items-center">
            <h1 className="font-semibold font-serif text-white text-xl md:text-2xl">Developer</h1>
            <ul className="flex items-center">
              <li className="text-white">
                <BsFillMoonStarsFill className="cursor-pointer text-lg md:text-xl" />
              </li>
              <li className="text-white">
                <a className="bg-cyan-500 rounded px-3 py-1 ml-4 md:ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-white grid justify-center items-center">
            <h2 className="text-4xl md:text-5xl py-2 font-medium bg-black bg-opacity-50 px-4 rounded inline-block m-2">Jari Peltola</h2>
            <h3 className="text-xl md:text-2xl py-2 bg-black bg-opacity-50 px-4 rounded m-2 inline-block">Developer and designer</h3>
            <p className="text-sm md:text-md py-2 leading-8 bg-black bg-opacity-50 px-4 rounded inline-block m-2 max-w-xl mx-auto">Your Vision, Our Creation</p>
          </div>
          <div className="text-4xl md:text-5xl text-white flex justify-center gap-8 md:gap-14 py-3 mt-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <AiFillYoutube />
            </a>
          </div>
          <div className="relative mx-auto rounded-full w-40 h-40 md:w-60 md:h-60 overflow-hidden mt-10 md:mt-20 opacity-65">
            <Image src={deved} layout="fill" objectFit="cover" alt={"developer"} className="object-cover" />
          </div>
        </section>
        {/* Section two */}
        <section className="px-5 md:px-40 gap-10">
          <div className="text-center py-8 m-4">
            <h2 className="text-4xl md:text-5xl py-4">Services I offer</h2>
            <h3 className="text-2xl md:text-3xl py-3">Web design and development</h3>
            <p className="text-md md:text-xl py-2 leading-8">Web design and development involve creating visually appealing and user-friendly websites. This service includes designing the layout, choosing color schemes, and ensuring mobile responsiveness. Development focuses on building the website &apos s <span className="text-cyan-500">functionality, including interactive features, e-commerce integration, and optimizing performance.</span> Together, these services create a seamless online presence for businesses.</p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 flex-1 mb-10 lg:mb-0">
              <Image className="relative mx-auto rounded" src={design} alt={"design"} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">My Design:</h3>
              <p className="py-2">Creating designs suited for your needs design theory.</p>
              <h4 className="py-4 text-cyan-500">Design tools I use:</h4>
              <p className="text-neutral-900 py-1">Photoshop</p>
              <p className="text-neutral-900 py-1">Illustrator</p>
              <p className="text-neutral-900 py-1">Figma</p>
              <p className="text-neutral-900 py-1">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 flex-1 mb-10 lg:mb-0">
              <Image className="relative mx-auto rounded" src={code} alt={"code"} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">My Code:</h3>
              <p className="py-2">Creating designs suited for your needs using the latest technologies.</p>
              <h4 className="py-4 text-cyan-500">Coding tools I use:</h4>
              <p className="text-neutral-900 py-1">React</p>
              <p className="text-neutral-900 py-1">JavaScript</p>
              <p className="text-neutral-900 py-1">TailwindCSS</p>
              <p className="text-neutral-900 py-1">Amazon Web Services</p>
            </div>
            <div className="text-center shadow-lg p-10 flex-1">
              <Image className="relative mx-auto rounded" src={consulting} alt={"consulting"} width={200} height={200} />
              <h3 className="text-lg font-medium pt-8 pb-2">My Consulting:</h3>
              <p className="py-2">Providing expert advice and guidance to enhance your business strategy and online presence.</p>
              <h4 className="py-4 text-cyan-500">Consulting tools I use:</h4>
              <p className="text-neutral-900 py-1">Google Analytics</p>
              <p className="text-neutral-900 py-1">ChatGPT</p>
              <p className="text-neutral-900 py-1">Microsoft Teams</p>
              <p className="text-neutral-900 py-1">Slack</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-40">
          <div className="text-center mt-8">
            <h3 className="text-3xl md:text-4xl py-2">Portfolio</h3>
            <p className="text-md md:text-xl py-2 leading-8 m-3">Here are some examples of websites I have created.</p>
          </div>
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:items-center md:gap-10">
            <div className="relative w-full md:w-1/2 lg:w-1/3">  
              <Image src={png1} width={800} height={600} alt={"siivous"} className="rounded-lg object-cover" />
              <a href="https://moontags.github.io/siivousote/" target="_blank" rel="noopener noreferrer">
                <button className="absolute inset-0 w-full h-full bg-black bg-opacity-50 text-white text-2xl flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Go to Siivousote
                </button>
              </a>
            </div>
          </div>
        </section>
        <footer className="m-10">
          <h3 className="text-center"> All rights reserved.</h3>
        </footer>
      </main>
    </div>
  );
}
