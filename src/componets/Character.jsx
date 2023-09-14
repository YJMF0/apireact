import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneCharacter } from "../funtions/funtion";
const Character = () => {
  const [character, setCharacter] = useState(null);
  const params = useParams();
  useEffect(() => {
    oneCharacter(params.id, setCharacter);
  }, []);

  return (
    <>
      {character != null ? (
        <div className="pt-[25px] gap-[3.9rem] grid bg-black">
          <div className="flex justify-center">
            <img
              src={character.image}
              alt=""
              className="flex justify-center w-[400px] h-[400px] rounded-3xl border-yellow-400 border-4"
            />
          </div>

          <div className="text-center text-gray-600 text-[25px]">
            <h2 className="hover:text-red-400">
              Nombre del personaje {character.name}
            </h2>
            <h2 className="hover:text-red-400">Especie: {character.species}</h2>
            <h2 className="hover:text-red-400">Genero: {character.gender}</h2>
            <h2 className="hover:text-red-400">Estado: {character.status}</h2>
          </div>
        </div>
      ) : (
        "No hay personaje"
      )}
    </>
  );
};

export default Character;
