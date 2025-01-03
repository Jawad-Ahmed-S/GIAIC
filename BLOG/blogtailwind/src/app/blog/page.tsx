import Image from "next/image";
import Navbar from "../../../Components/Navbar";

export default function blog() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div
        className="flex items-center justify-center w-screen h-[40vh] bg-cover bg-center bg-no-repeat text-white text-[1.8em] font-sans"
        style={{
          backgroundImage:
            "linear-gradient(rgba(55, 57, 46, 0.34), rgba(33, 27, 27, 0.5)), url('/images/main-content.jpg')",
        }}
      >
        <h1>The Benefits of Mindful Living</h1>
      </div>

      <section className="w-[90vw] max-w-[1000px] my-5 mx-auto text-[#333] leading-relaxed font-sans">
        <h2 className="text-left mt-8 text-[1.8em] text-[#2c3e50] font-semibold">
          Introduction:
        </h2>
        <p className="mb-8 text-justify text-[#444]">
          In today’s fast-paced world, it’s easy to get caught up in the rush of
          daily routines and forget to truly enjoy each moment. Mindful living
          is a practice that encourages us to slow down, appreciate the present,
          and focus on what truly matters. From reducing stress to improving
          overall well-being, mindfulness has a wide range of benefits that can
          positively impact our lives. In this blog, we’ll explore the
          importance of mindful living and how it can help you lead a more
          fulfilling life.
        </p>

        <div className="flex flex-col gap-5 md:flex-row items-start">
          <div className="flex-1">
            <h2 className="text-[1.8em] text-[#2c3e50] font-semibold">
              Section 1: What is Mindful Living?
            </h2>
            <p className="text-justify text-[#444]">
              Mindful living involves being fully present and engaged in each
              moment without judgment. It’s about paying attention to our
              thoughts, feelings, and surroundings with a sense of openness and
              curiosity. Mindfulness can be practiced in simple ways, such as
              taking a few deep breaths before responding to a stressful
              situation or savoring each bite during a meal. By doing so, we
              cultivate an awareness that helps us feel more connected to
              ourselves and others.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/main-content.jpg"
              alt="Mindful Living"
              width={500}
              height={300}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <h2 className="mt-8 text-[1.8em] text-[#2c3e50] font-semibold">
          Section 2: Benefits of Mindfulness
        </h2>
        <ul className="list-none space-y-5">
          <li>
            <h3 className="font-semibold">Reduces Stress</h3>
            <p>
              Mindfulness allows us to take a step back from stressful thoughts,
              helping us manage emotions and maintain a calm state of mind.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Improves Focus</h3>
            <p>
              Practicing mindfulness can enhance concentration by training the
              mind to stay present rather than getting distracted.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Enhances Relationships</h3>
            <p>
              By being fully attentive, we can listen better and engage more
              deeply in our relationships, fostering stronger connections.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Promotes Emotional Health</h3>
            <p>
              Mindfulness can lead to greater self-acceptance, compassion, and
              emotional stability, improving overall mental health.
            </p>
          </li>
        </ul>

        <div className="flex flex-col gap-5 mt-8 md:flex-row items-start">
          <div className="flex-1">
            <h2 className="text-[1.8em] text-[#2c3e50] font-semibold">
              Section 3: How to Start Practicing Mindfulness
            </h2>
            <p>
              Starting a mindfulness practice doesn’t require a big time
              commitment or any special tools. Here are a few simple ways to
              begin:
              <br />
              <strong>Mindful Breathing:</strong> Take a few moments each day to
              focus on your breath, noticing each inhale and exhale.
              <br />
              <strong>Body Scan:</strong> Practice bringing attention to each
              part of your body, starting from your toes and moving up to your
              head, to relax and release tension.
              <br />
              <strong>Mindful Eating:</strong> Take the time to savor your food,
              paying attention to its texture, taste, and aroma.
              <br />
              <strong>Gratitude Journaling:</strong> Write down three things
              you’re grateful for each day to bring awareness to the positive
              aspects of your life.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/3.jpg"
              alt="Mindful Living"
              width={500}
              height={300}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <h2 className="mt-8 text-[1.8em] text-[#2c3e50] font-semibold">
          Conclusion
        </h2>
        <p className="text-justify text-[#444]">
          Incorporating mindfulness into your life can have lasting positive
          effects. By making a conscious effort to live more mindfully, you can
          enjoy a greater sense of peace, fulfillment, and happiness. So, why
          not take a few moments today to pause, breathe, and appreciate the
          present? You might just find it’s the first step toward a more
          balanced, mindful life.
        </p>
      </section>

      <footer className="flex items-center justify-center w-screen h-[10vh] bg-[#1b252e] text-white text-center">
        <p>All Rights Reserved &copy; BlogSite.com&trade;</p>
      </footer>
    </div>
  );
}
