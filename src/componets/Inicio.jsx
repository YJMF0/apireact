import React, { useEffect, useState } from "react";
import { allCharacter } from "../funtions/funtion";

const Inicio = () => {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    allCharacter(setCharacter);
  }, []);

  return (
    <>
      {character != null
        ? character.map((character) => (
            <div key={character.id} className="pt-[15px] pb-[25px] flex justify-center bg-yellow-300">
                
              <div>
                <div className="grid-cols-3">
                  <img
                    src={character.image}
                    alt=""
                    className="flex justify-items-center w-[350px] h-[350px] rounded-3xl border-black border-4"
                  />
                </div>

                <div className="text-center text-gray-600 underline text-[28px] hover:text-[32px] hover:text-black">
                  <a href={`/character/${character.id}`}>{character.name}</a>
                </div>
              </div>
            </div>
          ))
        : "No hay character"}
    </>
  );
};

export default Inicio;
