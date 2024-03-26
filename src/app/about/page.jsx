import Image from "next/image";
import Banner from "../../../public/assets/frame2/andrea-cau-nV7GJmSq3zc-unsplash.jpg";

const About = () => {
  return (
    <main>
      {/* Banner */}
      <section>
        {/* Pembungkus utama */}
        <div className="relative h-screen">
          {/* Image untuk banner utama disini */}
          <Image
            src={Banner}
            alt="Banner"
            className="pointer-events-none w-screen object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
