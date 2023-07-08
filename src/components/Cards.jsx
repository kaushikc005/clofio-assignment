import React from "react";

const Cards = ({ data }) => {

  return (
    <section className={` bg-[${data.color}]
      border border-black rounded-lg w-64 flex flex-col items-center p-2 pt-4 pb-4`}>
      <p className="text-lg font-bold">${data.money}</p>
      <p className="text-lg">{data.desc}</p>
    </section>
  );
};

export default Cards;
