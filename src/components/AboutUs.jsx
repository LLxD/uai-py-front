import React from "react";
export function AboutUs({ teamIllustration }) {
  return (
    <section className="mt-10 grid grid-flow-row justify-items-center">
      <h1 className="text-center text-4xl text-white my-6">Quem somos</h1>
      <div className="grid lg:grid-flow-col justify-items-center">
        <h4 className="text-xl text-white max-w-3xl mx-4 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          blanditiis, porro quam sunt iure temporibus mollitia quidem voluptatum
          dolore inventore itaque quibusdam delectus velit quis tenetur nesciunt
          voluptate expedita natus! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Iste blanditiis, porro quam sunt iure temporibus
          mollitia quidem voluptatum dolore inventore itaque quibusdam delectus
          velit quis tenetur nesciunt voluptate expedita natus! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Iste blanditiis, porro
          quam sunt iure temporibus mollitia quidem voluptatum dolore inventore
          itaque quibusdam delectus velit quis tenetur nesciunt voluptate
          expedita natus! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </h4>
        <img className="w-80 m-4" src={teamIllustration}></img>
      </div>
    </section>
  );
}
