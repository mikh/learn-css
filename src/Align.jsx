export default function Align() {
  const elements = [
    <div
      key={1}
      className="w-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl"
    >
      1
    </div>,
    <div
      key={2}
      className="w-48 h-32 border-solid border rounded-md border-black bg-red-800 flex justify-center items-center text-3xl"
    >
      2
    </div>,
    <div
      key={3}
      className="w-36 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"
    >
      3
    </div>,
  ];

  function container(align_class) {
    return (
      <div
        className={`flex flex-row border-2 ${align_class}`}
        style={{ height: "300px" }}
      >
        {elements}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col">
        <h1>start</h1>
        {container("items-start")}
        <h1>end</h1>
        {container("items-end")}
        <h1>center</h1>
        {container("items-center")}
        <h1>baseline</h1>
        {container("items-baseline")}
        <h1>stretch</h1>
        {container("items-stretch")}
      </div>
    </>
  );
}
