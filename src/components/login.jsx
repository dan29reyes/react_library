import { useNavigate } from "react-router";

//Components
import Button from "./button";

export default function Login({ changeComponent }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-fit bg-white h-2/3 justify-center space-y-6 rounded-xl px-24 py-36">
      <h1 className="text-4xl text-violet-500 font-semibold">Inicia Sesión</h1>
      <div className="flex flex-col items-center mt-6">
        <input
          className="border rounded-lg px-4 py-2 w-96 h-14 shadow-lg mb-4 outline-none"
          type="text"
          placeholder="Usuario"
        />
        <input
          className="border rounded-lg px-4 py-2 w-96 h-14 shadow-lg mb-8 outline-none"
          type="password"
          placeholder="Contraseña"
        />
        <Button
          style="bg-violet-500 w-72 h-12 text-lg text-white rounded-lg mb-2 hover:bg-violet-700 transition duration-300 ease-in-out"
          type="submit"
          func={() => navigate("/Inicio")}
          text={"Login"}
        />
        <p className="text-slate-500 mb-4 mt-2">
          ¿Aún no estas registrado?
          <span 
            className="text-violet-500 cursor-pointer hover:text-violet-700 transition duration-300 ease-in-out"
            onClick={() => changeComponent()}
          >
            {"  Crea una cuenta"}
          </span>
        </p>
        <p className="text-violet-500 cursor-pointer mb-4 hover:text-violet-700 transition duration-300 ease-in-out">
          ¿Olvidaste tu contraseña?
        </p>
      </div>
    </div>
  );
}
