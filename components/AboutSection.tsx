import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="technical-support">
      <ScrollAnimationWrapper
        className={"grid md:grid-cols-2 p-10 text-white gap-6 items-center"}
      >
        <img src="/images/iphone.png" />
        <div className="flex flex-col gap-6">
          <h2 className="text-[50px] flex gap-3">
            <div className="flex-1 rounded-none border-r-[5px] border-main" />
            Technical Support:{" "}
            <span className="text-main">Here to Assist You</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-3">
            We provide technical assistance to our members to help them along
            their trading journey in case they face any difficulty or have
            questions related to our course or any trading topic. Our dedicated
            team is here to ensure you have the support you need, whenever you
            need it.
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default AboutSection;
