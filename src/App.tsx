
function App() {
  return (
    <div className="bg-black h-screen text-white flex flex-col justify-center items-center">
      <div className="capitalize font-inter bg-neutral-800 px-6 py-1.5 rounded-full text-sm border border-black">
        The Robot Learning Company
      </div>
      <h1 className="text-5xl font-semibold w-full md:w-1/2 lg:w-1/3 text-center pt-4">
        Everything you need to build intelligent robots.
      </h1>

      <h1 className="text-[18px] font-semibold text-neutral-400 w-full px-4 md:px-0 md:w-[45%] lg:w-[30%] text-center py-4">
        Our API makes AI-powered robotic automation accessible to businesses of all sizes.
      </h1>

      <div className="w-10/12 pl-1.5 md:w-1/4 lg:w-1/4 border py-0.5 grid grid-cols-3 rounded-md">
        <input type="text" className="col-span-2 text-neutral-400 outline-none" placeholder="you@example.com" />
        <button className="bg-white ml-1 mr-0.5 text-black py-2.5 px-3 rounded-sm text-sm md:text-[16px]">
          <span>
            Join
          </span>
          <span className="pl-1 hidden sm:inline">
            Waitlist
          </span>
        </button>
      </div>

      <div className="flex items-center justify-center w-full pt-4">
        <p className="text-neutral-400 font-semibold">backed by</p>
        <img src="https://framerusercontent.com/images/ztkXNbmbHWe2rjREGDXMxtmdb4.png?scale-down-to=512" alt=""
          className="w-32"
        />
      </div>
    </div>
  )
}

export default App