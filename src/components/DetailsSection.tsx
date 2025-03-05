"use client";
const Details = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between  bg-black px-8 md:px-20 py-16">
      {/* Left Side - Heading */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-extrabold font-bruno text-white leading-tight">
        UNITED BY THE GAME. <br/>DRIVEN BY PASSION.
        </h2>
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 mt-6 md:mt-0 text-gray-400 text-lg leading-relaxed">
        <p>
        At YSYW, we live and breathe the game. More than just a platform, we are a community built around passion, connection, and the pure love for sports.

By stepping onto the field with the players, standing beside the fans, and living every moment of the game, we bridge the gap between athletes and supporters. We bring you the most authentic, behind-the-scenes experiences—the moments that define champions, unite teams, and create lasting legacies.

Welcome to YSYW, where every match, every goal, and every victory is a story worth sharing.
        </p>
      </div>
    </section>
  );
};

export default Details;
