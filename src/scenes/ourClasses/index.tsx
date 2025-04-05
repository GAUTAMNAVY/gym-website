import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Push your limits and build serious strength with our expert-led weight training sessions. Whether you're a beginner or a pro lifter, our tailored programs help you gain muscle, improve endurance, and achieve real results Join our community of lifters and level up your fitness—one rep at a time.",


    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
    "Find your balance, improve flexibility, and relax your mind with our expert-led yoga sessions. Whether you're a beginner or an experienced yogi, our classes help you build strength, reduce stress, and enhance overall well-being.",


    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and improve posture with our targeted ab workouts. These classes focus on sculpting your midsection, building endurance, and enhancing overall core stability. Perfect for all fitness levels.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Step outside your comfort zone with our adrenaline-pumping adventure classes. From obstacle challenges to dynamic circuit training, these sessions are designed to push your limits and keep fitness exciting.",


    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "Stay energized and active with our full-body fitness classes. Blending cardio, strength, and flexibility training, these sessions are perfect for boosting metabolism and building overall endurance in a fun group environment.",


    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Level up your workouts with guided training classes led by certified professionals. These sessions combine personalized techniques and structured plans to help you crush your fitness goals—whether you're toning up or training for performance.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
