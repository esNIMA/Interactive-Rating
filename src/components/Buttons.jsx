export default function Buttons({ rating, setRating, setNext }) {
  return (
    <>
      <div className="mb-3">
        <button
          className="bg-DarkBlue hover:bg-DarkGrey focus:bg-custom-orange ml-3 h-6 w-6 rounded-full  align-middle text-xs text-slate-200"
          onClick={() => setRating(1)}
        >
          1
        </button>
        <button
          className="bg-DarkBlue hover:bg-DarkGrey focus:bg-custom-orange ml-3 h-6 w-6 rounded-full  align-middle text-xs text-slate-200"
          onClick={() => setRating(2)}
        >
          2
        </button>
        <button
          className="bg-DarkBlue hover:bg-DarkGrey focus:bg-custom-orange ml-3 h-6 w-6 rounded-full  align-middle text-xs text-slate-200"
          onClick={() => setRating(3)}
        >
          3
        </button>
        <button
          className="bg-DarkBlue hover:bg-DarkGrey focus:bg-custom-orange ml-3 h-6 w-6 rounded-full  align-middle text-xs text-slate-200"
          onClick={() => setRating(4)}
        >
          4
        </button>
        <button
          className="bg-DarkBlue hover:bg-DarkGrey focus:bg-custom-orange ml-3 h-6 w-6 rounded-full  align-middle text-xs text-slate-200"
          onClick={() => setRating(5)}
        >
          5
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-custom-orange active:text-custom-orange h-7 w-48 rounded-xl pt-1 text-xs font-light uppercase text-slate-200 active:bg-white
          "
          onClick={() => (rating ? setNext(true) : setNext(false))}
        >
          submit
        </button>
      </div>
    </>
  );
}
