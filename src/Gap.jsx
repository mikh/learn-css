export default function Gap() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];
  const elements = colors.map((bg_color, index) => {
    return (
      <div
        key={index}
        className={`${bg_color} w-24 h-24 border-solid border rounded-md border-black flex justify-center items-center text-3xl`}
      >
        {index}
      </div>
    );
  });

  function container(gap_class) {
    return (
      <div
        className={`flex flex-row border-2 flex-wrap ${gap_class}`}
        style={{ width: "350px" }}
      >
        {elements}
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col">
        <h1>gap</h1>
        {container("gap-4")}
        <h1>gap-x</h1>
        {container("gap-x-4")}
        <h1>gap-y</h1>
        {container("gap-y-4")}
      </div>
    </>
  );
}
