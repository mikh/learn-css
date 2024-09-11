export default function Wrap() {
  return (
    <div className="flex flex-col">
      <h1>nowrap</h1>
      <div className="flex flex-row flex-nowrap" style={{ width: "800px" }}>
        <div className="w-80 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-72 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl">
          3
        </div>
        <div className="w-96 h-16 border-solid border rounded-md border-black bg-purple-600 flex justify-center items-center text-3xl">
          4
        </div>
        <div className="w-80 h-36 border-solid border rounded-md border-black bg-green-300 flex justify-center items-center text-3xl">
          5
        </div>
        <div className="w-72 h28 border-solid border rounded-md border-black bg-orange-600 flex justify-center items-center text-3xl">
          6
        </div>
      </div>

      <h1>wrap</h1>

      <div className="flex flex-row flex-wrap" style={{ width: "800px" }}>
        <div className="w-80 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-72 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl">
          3
        </div>
        <div className="w-96 h-16 border-solid border rounded-md border-black bg-purple-600 flex justify-center items-center text-3xl">
          4
        </div>
        <div className="w-80 h-36 border-solid border rounded-md border-black bg-green-300 flex justify-center items-center text-3xl">
          5
        </div>
        <div className="w-72 h28 border-solid border rounded-md border-black bg-orange-600 flex justify-center items-center text-3xl">
          6
        </div>
      </div>
      <h1>wrap-reverse</h1>
      <div
        className="flex flex-row flex-wrap-reverse"
        style={{ width: "800px" }}
      >
        <div className="w-80 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl">
          1
        </div>
        <div className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl">
          2
        </div>
        <div className="w-72 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl">
          3
        </div>
        <div className="w-96 h-16 border-solid border rounded-md border-black bg-purple-600 flex justify-center items-center text-3xl">
          4
        </div>
        <div className="w-80 h-36 border-solid border rounded-md border-black bg-green-300 flex justify-center items-center text-3xl">
          5
        </div>
        <div className="w-72 h28 border-solid border rounded-md border-black bg-orange-600 flex justify-center items-center text-3xl">
          6
        </div>
      </div>
    </div>
  );
}
