export default function Justify() {
  return (
    <div className="flex flex-col">
      <h1>normal</h1>
      <div className="flex flex-row justify-normal" style={{ width: "800px" }}>
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>start</h1>
      <div className="flex flex-row justify-start">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>end</h1>
      <div className="flex flex-row justify-end">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>center</h1>
      <div className="flex flex-row justify-center">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>space-between</h1>
      <div className="flex flex-row justify-between">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>space-around</h1>
      <div className="flex flex-row justify-around">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>space-evenly</h1>
      <div className="flex flex-row justify-evenly">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
      <h1>stretch</h1>
      <div className="flex flex-row justify-stretch">
        <div className="w-24 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-36 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"></div>
      </div>
    </div>
  );
}
