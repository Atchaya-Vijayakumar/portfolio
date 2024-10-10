import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hello...</MotionText>
      </h1>
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>I'm Atchaya!</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <img
            className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
            src="/ninja.jpg"
            alt="Ninja"
          />
        </MotionDiv>
      </div>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page..!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
          An aspiring Full Stack Developer. I'm passionate about technology and enjoy tackling complex problems through my work.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={1.6}>
          <p>
            My interests include <span className="font-bold">Front-End Development</span>,<span className="font-bold">Data Science</span>, <span className="font-bold">UI/UX Design</span>, and <span className="font-bold"></span>.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={1.8}>
          <p>
          When I'm not coding, I focus on <span className="font-bold">Designing </span> and <span className="font-bold">Developing</span>.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
