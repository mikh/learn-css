export default function Direction() {
  return (
    <div className="flex flex-col">
      <h1>Different flex-directions</h1>
      <div className="flex flex-row">
        <div className="w-40 h-40 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-32 h-40 border-solid border rounded-md border-black bg-red-400 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-52 h-52 border-solid border rounded-md border-black bg-blue-500 flex justify-center items-center text-3xl">
          3
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <div className="w-20 h-32 border-solid border rounded-md border-black bg-green-300 flex justify-center items-center text-3xl">
          4
        </div>
        <div className="w-14 h-16 border-solid border rounded-md border-black bg-purple-600 flex justify-center items-center text-3xl">
          5
        </div>
        <div className="w-80 h-56 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          6
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-14 h-12 border-solid border rounded-md border-black bg-yellow-600 flex justify-center items-center text-3xl">
          7
        </div>
        <div className="w-28 h-48 border-solid border rounded-md border-black bg-orange-500 flex justify-center items-center text-3xl">
          8
        </div>
        <div className="w-36 h-36 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl">
          9
        </div>
      </div>
      <div className="flex flex-col-reverse">
        <div className="w-64 h-24 border-solid border rounded-md border-black bg-lime-400 flex justify-center items-center text-3xl">
          10
        </div>
        <div className="w-72 h-11 border-solid border rounded-md border-black bg-emerald-500 flex justify-center items-center text-3xl">
          11
        </div>
        <div className="w-96 h-64 border-solid border rounded-md border-black bg-cyan-400 flex justify-center items-center text-3xl">
          12
        </div>
      </div>
    </div>
  );
}
