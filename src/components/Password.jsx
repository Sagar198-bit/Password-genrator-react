import { useEffect, useCallback, useRef, useState } from "react";
import "./index.css";

const PasswordGenrator = () => {
  const [length, setlength] = useState(6);
  const [iscapital, setCapitalletters] = useState(false);
  const [issmall, setsmalletters] = useState(false);
  const [isnumber, setnumbers] = useState(false);
  const [ischar, setcharacter] = useState(false);
  const [Password, setPassword] = useState("");
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}<>?/";

  const copythetext = () => {
    navigator.clipboard.writeText(Password).then(() => alert('copied').catch(err => alert('This was an err')))
  }

  const Genraterandompassword = (Password = "") => {
    const RandomWords = (data) => {
      let value = data.charAt(Math.floor(Math.random() * data.length + 1));

      return value;
    };

    function truncateString(str, num) {
      if (str.length > num) {
        return str.slice(0, num);
      } else {
        return str;
      }
    }

    if (iscapital) {
      Password += RandomWords(uppercase);
    }
    if (issmall) {
      Password += RandomWords(lowercase);
    }
    if (isnumber) {
      Password += RandomWords(numbers);
    }

    if (ischar) {
      Password += RandomWords(specialChars);
    }

    if (length > Password.length) {
      return Genraterandompassword(Password);
    } else {
      const psswd = truncateString(Password , length)
      setPassword(psswd)
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-auto h-auto bg-white py-10 px-15">
        <h1 className="text-black text-center text-2xl">Password Genrator</h1>
        <div className=" flex justify-center gap-4 m-8 ">
          <input
            type="text"
            className="border-2 text-black rounded px-8 py-1 "
            readOnly
            value={Password}
          />
          <button className="bg-cyan-500 px-10 py-1.5 rounded cursor-pointer" onClick={copythetext}>
            Copy
          </button>
        </div>
        <div className="flex justify-center items-center gap-5 m-8 ">
          <div className="flex justify-center items-cente">
            <input
              type="range"
              min="6"
              max="50"
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Size : {length} </label>
          </div>

          <div className="flex justify-center items-cente">
            <input
              type="checkbox"
              id="cap"
              className="cursor-pointer"
              onClick={() => setCapitalletters((prev) => !prev)}
            />
            <label htmlFor="cap" className="cursor-pointer">
              Capital Letters
            </label>
          </div>

          <div className="flex justify-center items-cente">
            <input
              type="checkbox"
              id="small"
              className="cursor-pointer"
              onClick={() => setsmalletters((prev) => !prev)}
            />
            <label htmlFor="small" className="cursor-pointer">
              Small Lettters
            </label>
          </div>

          <div className="flex justify-center items-cente">
            <input
              type="checkbox"
              id="num"
              className="cursor-pointer"
              onClick={() => setnumbers((prev) => !prev)}
            />
            <label htmlFor="num" className="cursor-pointer">
              Integer Number
            </label>
          </div>
          <div className="flex justify-center items-cente">
            <input
              type="checkbox"
              id="char"
              onClick={() => setcharacter((prev) => !prev)}
            />
            <label htmlFor="char" className="cursor-pointer">
              Special Characters
            </label>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-cyan-500 px-30 py-1.5 rounded cursor-pointer"
            onClick={() => {
              Genraterandompassword();
            }}
          >
            Genrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenrator;
