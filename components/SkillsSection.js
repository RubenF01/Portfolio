import Skill from "./Skill";
import useEmblaCarousel from "embla-carousel-react";

const technologies = [];

const SkillsSection = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="max-w-xs mx-auto pt-10">
      <h1 className="text-xl text-slate-900">Skills</h1>
      <div className="embla" ref={emblaRef} style={styles.embla}>
        <div className="embla__container" style={styles.embla__container}>
          <div className="embla__slide" style={styles.embla__slide}>
            Slide 1
          </div>
          <div className="embla__slide" style={styles.embla__slide}>
            Slide 2
          </div>
          <div className="embla__slide" style={styles.embla__slide}>
            Slide 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

const styles = {
  embla: {
    overflow: "hidden",
  },

  embla__container: {
    display: "flex",
  },

  embla__slide: {
    position: "relative",
    flex: "0 0 100%",
  },
};
