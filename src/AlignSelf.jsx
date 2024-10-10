export default function AlignSelf() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];

  const align_values = [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ];

  const elements = colors.map((bg_color, index) => {
    return (
      <div
        key={index}
        className={`${bg_color} w-44  border-solid border rounded-md border-black flex justify-center items-stretch text-3xl`}
        style={{ alignSelf: align_values[index] }}
      >
        {align_values[index]}
      </div>
    );
  });

  return (
    <>
      <div
        className="flex border-2"
        style={{ width: "1000px", height: "1000px" }}
      >
        {elements}
      </div>
    </>
  );
}
