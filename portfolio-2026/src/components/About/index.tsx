import { useState, useEffect } from 'react';
import ayan from "../../assets/img-ayan-1.webp";
import "./style.scss";
import Diery from './Diery';
import MobileDiery from './MobileDiery';
import Profile from './Profile';

export default function About({ data }: any) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    checkSize();

    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className="bg-[#FFEDD5] z-10 flex items-center justify-center overflow-hidden font-sans antialiased px-6 py-12 lg:py-16">
      <div className="w-full max-w-[1600px] flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-y-8 gap-0">

        {/* LEFT SECTION: PURPLE CARD */}
        <div className="z-20 w-full md:w-[450px] shrink-0 bg-[#8e66ff] rounded-[50px] xl:aspect-4/5 p-12 flex flex-col justify-between items-center relative shadow-2xl">
          {/* <img src={ayan} alt="" width="100%" /> */}
          <Profile />
        </div>

        {/* RIGHT SECTION: PILL SHAPE */}
        <div className="grow w-full max-w-[1000px] flex items-center justify-center">
          <div className="relative w-full lg:aspect-[1.6/1] bg-[#181818] rounded-[50px] md:rounded-[150px] flex items-center justify-center overflow-hidden shadow-2xl border border-white/5 p-8 lg:p-0">
            {isMobile ? <MobileDiery data={data} /> : <Diery data={data} />}
          </div>
        </div>

      </div>
    </div>
  );
}