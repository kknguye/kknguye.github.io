import Socials from "../sections/Socials";
import ManIcon from "../assets/icn-man.svg";

const Hero = () => {
  return (
    <section id="about" className="w-[1440px] h-[716px] p-[60px_80px] flex justify-center items-center scroll-mt-24">
      {/* Container */}
      <div className="w-[1280px] h-[596px] px-8 py-0 flex items-center">
        {/* Banner Frame */}
        <div className="w-[600px] h-[376px] py-5 px-0 gap-12 flex flex-col">
          {/* Intro Frame */}
          <div className="flex flex-col gap-8 text-5xl">
            {/* Inner Frame 1 */}
            <div>
              <p>Hello I'm <span className="font-extrabold">Kenny Nguyen</span></p>
            </div>
            {/* Inner Frame 2 */}
            <div>
              <p><span className="font-extrabold">Clemson</span> New Grad</p>
            </div>
            {/* Inner Frame 3 */}
            <div>
              <p>Based in <span className="font-extrabold">Greenville, SC.</span></p>
            </div>
            {/* Bio Frame */}
            <div className="text-base">
              <span className="text-zinc-500">
                Passionate biologist turned aspiring computer scientist. 
                I earned my B.S. in Biological Sciences from the University of South Carolina, then pursued a second degree in Computer Science at Clemson University, graduating Magna Cum Laude with a 3.9 GPA in December 2025. 
                I previously completed two Software Engineer Co-Op rotations at <a href="https://www.alarm.com" className="underline">Alarm.com</a>, building full-stack features across Ember.js, .NET Core, and SQL for a platform serving 20,000+ commercial customers.
              </span>
            </div>
          </div>
          <Socials />
        </div>
        <img className="absolute right-0" src={ManIcon} />
      </div>
    </section>
  )
}

export default Hero;