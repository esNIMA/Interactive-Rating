import { useState } from "react";
import Buttons from "./components/Buttons";
import Text from "./components/Text";

function App() {
  const [rating, setRating] = useState("");
  const [next, setNext] = useState(false);
  return (
    <div className=" mt-5 ">
      <div className="from-DarkBlue to-VeryDarkBlue ml-auto mr-auto w-60 rounded-xl bg-gradient-to-b p-4">
        {next ? (
          <div
            className="flex
          items-center justify-center"
          >
            <img
              className="h-20 w-24"
              src="./images/illustration-thank-you.svg"
              alt="Thank you illustration"
            />
          </div>
        ) : (
          <>
            <Text />
            <Buttons rating={rating} setRating={setRating} setNext={setNext} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
