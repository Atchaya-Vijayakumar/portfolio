import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20 md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              With a background in <span className="font-bold">Artificial Intelligence and Data Science</span>, I embarked on a journey to turn my passion for technology into a career. My expertise lies in <span className="font-bold">Front-End</span>, <span className="font-bold">Data Science</span>, and <span className="font-bold">UI/UX Design</span>. I have hands-on experience with technologies such as <span className="font-bold">Python</span>, <span className="font-bold">Java</span>,  and <span className="font-bold">SQL</span>, and I'm proficient in tools like <span className="font-bold">Visual Studio</span>, <span className="font-bold">Git</span>, <span className="font-bold">Jupyter</span>, and <span className="font-bold">Excel</span>. 
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              My projects showcase my ability to tackle complex problems and develop innovative solutions. Notable examples include <span className="font-bold">Book-Blush Webiste</span>, a website where we sell, buy, read and rent books in online , and <span className="font-bold">ATM-Keypad Shuffling And Security</span>, which prevents the security of PINS from beign theft. 
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              When I'm not immersed in coding, I focus on <span className="font-bold">Designing</span> and <span className="font-bold">Developing</span>. I am committed to staying updated with emerging technologies and continuously enhancing my skill set.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photos.jpeg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photos.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
