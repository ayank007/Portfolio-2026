import './style.scss'
import HeroImg from './heroImg'
import TypeWriter from './typeWriter'
import { Link } from '@tanstack/react-router'

// images
import Grid from '@/assets/hero/gridBg.png'
import FigmaLogo from '@/assets/hero/figma.png'
import Polygon from '@/assets/hero/polygon.png'
import GsapLogo from '@/assets/hero/gsapLogo1.gif'
import JavaScriptLogo from '@/assets/hero/javascript.png'
import Plant from '@/assets/hero/plant.svg'
import TechBox from '@/assets/hero/techBox.svg'
import Decoration3 from '@/assets/hero/decoration3.svg'
import Decoration9 from '@/assets/hero/decoration9.svg'
import MagneticElement from '../../utils/magneticElement'

const Hero = ({ data }: any) => {
    return (
        // <>hello</>
        <section id="Header" className="overflow-hidden">
            <div className='mainContainer px-base h-full z-10 flex flex-col lg:flex-row'>
                <div className="numbers -z-10 absolute -top-80 font-semibold flex flex-col text-white gap-8 opacity-5 md:opacity-20">
                    <p>30</p>
                    <p>31</p>
                    <p>32</p>
                    <p>33</p>
                    <p>34</p>
                    <p>35</p>
                    <p>36</p>
                    <p>37</p>
                    <p>38</p>
                    <p>39</p>
                    <p>40</p>
                    <p>41</p>
                    <p>42</p>
                    <p>43</p>
                    <p>44</p>
                    <p>45</p>
                    <p>46</p>
                    <p>47</p>
                    <p>48</p>
                    <p>49</p>
                    <p>50</p>
                    <p>51</p>
                    <p>52</p>
                    <p>53</p>
                    <p>54</p>
                    <p>55</p>
                    <p>56</p>
                    <p>57</p>
                    <p>58</p>
                    <p>59</p>
                    <p>60</p>
                </div>
                <div className="texts w-full lg:w-1/2 lg:pl-24 flex flex-col justify-center h-full z-10 items-center lg:items-start text-center lg:text-left">
                    <img src={Polygon} alt="Polygon" className='decoration decoration2' />
                    <img src={Decoration3} alt="Decoration3" className='decoration decoration3' />
                    <div className="decoration decoration4">*</div>
                    <div>
                        <div className="decoration decoration1">
                            &#60;/&#62;
                        </div>
                        <h1>{data.name}</h1>
                    </div>
                    <p className='description mt-4 text-base xl:text-xl'>
                        {data.title}
                    </p>
                    <Link to="/" hash="Work">
                        <div>
                            <MagneticElement padding={true} velocity={100}>
                                <div className='callToActionBtn pointer-events-none capitalize'>
                                    <div className="icon">
                                        <div className="ball"></div>
                                    </div>
                                    {data.action}
                                </div>
                            </MagneticElement>
                        </div>
                    </Link>
                    <br /><br />
                </div>
                <div className="images w-full lg:w-1/2 hidden md:flex justify-end -right-16 lg:right-0 pr-10 items-end">
                    <div className='heroImg max-w-[300px] lg:max-w-none'>
                        <div className="tagLine -ml-8 lg:ml-0">
                            <TypeWriter data={data.intro} />
                        </div>
                        <HeroImg />
                        <img src={JavaScriptLogo} alt="JavaScript Logo" className='jsLogo -ml-10 lg:ml-0' />
                        <img src={FigmaLogo} alt="Figma Logo" className='fLogo' />
                    </div>
                    <div className="gsapLogo flex items-end flex-col absolute z-10 -mt-40 lg:mt-0 -ml-16 lg:ml-0">
                        <img src={GsapLogo} alt="GSAP" className='w-20 -mb-1' />
                        <div className='w-28 h-6 rounded-3xl border border-solid border-white flex items-center'>
                            <div className="ball bg-white rounded-full w-6 h-6 ml-6"></div>
                        </div>
                    </div>
                </div>
                <img src={Plant} alt="Plant" className='absolute left-4 sm:left-12 lg:left-32 bottom-0 w-16 z-10' />
                <img src={TechBox} alt="TechBox" className='absolute z-10 bottom-0 w-36 right-0 sm:right-12 md:left-32 lg:left-80' />
                <div className="decoration decoration5"></div>
                <div className="decoration decoration6"></div>
                <div className="decoration decoration7"></div>
                <div className="decoration decoration8"></div>
            </div>
            <img src={Grid} alt="Grid Background" className='absolute bottom-0 left-1/4' />
            <img src={Decoration9} alt="Decoration 9" className='decoration decoration9' />
        </section>
    )
}

export default Hero
