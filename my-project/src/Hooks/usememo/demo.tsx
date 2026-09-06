import { useMemo, useState } from "react";
import { findPrime } from "../../component/helper";

export function Demo() {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    console.log("rendering...", text);

    
    const prime=useMemo(()=>findPrime(text),[text])
    const v=10



      
    //   const prime=()=>{
    //     return findPrime(text)
    //   }

      
    
    return (
        <div
            className={`m-4 p-2 w-96 h-96 border px-5 ${
                isDarkTheme
                    ? "bg-gray-900 text-white border-white"
                    : "bg-white text-black border-black"
            }`}
        >
            <div>
                <button
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                    className="m-10 p-2 bg-green-200 text-black"
                >
                    Toggle 
                </button>
            </div>

            <div>
                <input
                    type="number"
                    value={text}
                    onChange={(e) => setText(Number(e.target.value))}
                    className={`border w-72 ${
                        isDarkTheme
                            ? "bg-gray-800 text-white border-white"
                            : "bg-white text-black border-black"
                    }`}
                />
            </div>

            <div>
                <h1>nth Prime: {prime}</h1>
            </div>
        </div>
    );
}