export default function Thanks({ rating }) {
  return (
    <div>
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
      <div className="mt-5 flex items-center justify-center">
        <p className="flex h-6 w-40 items-center justify-center rounded-xl bg-DarkBlue text-center align-middle text-xs text-custom-orange">
          you selected {rating} out of 5
        </p>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <h1 className="text-lg font-bold text-slate-200">Thank you!</h1>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <p className="text-center text-xs text-slate-400">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
