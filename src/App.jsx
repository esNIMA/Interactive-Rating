import { useState } from "react";
import Buttons from "./components/Buttons";
import Text from "./components/Text";
import Thanks from "./components/Thanks";

function App() {
  const [rating, setRating] = useState("");
  const [next, setNext] = useState(false);
  return (
    <div className=" mt-5 ">
      <div className="ml-auto mr-auto w-60 rounded-xl bg-gradient-to-b from-DarkBlue to-VeryDarkBlue p-4">
        {next ? (
          <Thanks rating={rating} />
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
