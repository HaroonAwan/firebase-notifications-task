import loader from "../../assets/images/loader.gif";

export default function FullscreenLoader({ cover = true }) {
  return (
    <div
      className={`${cover ? "fixed inset-0 w-screen h-screen bg-white" : ""}
    flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover`}
    >
      <img
        src={loader}
        alt="loading animation"
        className={cover ? "w-20" : "w-14"}
      />
      <p className="text-gray-500 h-x-sm mt-4">Please wait...</p>
    </div>
  );
}
