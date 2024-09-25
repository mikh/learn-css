export default function AlignContent() {
  const elements = [
    <div
      key={1}
      className="w-80 h-24 border-solid border rounded-md border-black bg-slate-400 flex justify-center items-center text-3xl"
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
      className="w-72 h-20 border-solid border rounded-md border-black bg-sky-500 flex justify-center items-center text-3xl"
    >
      3
    </div>,
    <div
      key={4}
      className="w-96 h-16 border-solid border rounded-md border-black bg-purple-600 flex justify-center items-center text-3xl"
    >
      4
    </div>,
    <div
      key={5}
      className="w-80 h-36 border-solid border rounded-md border-black bg-green-300 flex justify-center items-center text-3xl"
    >
      5
    </div>,
    <div
      key={6}
      className="w-72 h28 border-solid border rounded-md border-black bg-orange-600 flex justify-center items-center text-3xl"
    >
      6
    </div>,
  ];

  function container(align_content_class) {
    return (
      <div
        className={`flex flex-row border-2 flex-wrap ${align_content_class}`}
        style={{ width: "800px", height: "800px" }}
      >
        {elements}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col">
        <h1>normal</h1>
        {container("content-normal")}
        <h1>center</h1>
        {container("content-center")}
        <h1>start</h1>
        {container("content-start")}
        <h1>end</h1>
        {container("content-end")}
        <h1>between</h1>
        {container("content-between")}
        <h1>around</h1>
        {container("content-around")}
        <h1>evenly</h1>
        {container("content-evenly")}
        <h1>baseline</h1>
        {container("content-baseline")}
        <h1>stretch</h1>
        {container("content-stretch")}
      </div>
    </>
  );
}
