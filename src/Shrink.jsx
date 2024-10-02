export default function Shrink() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];

  const shrink_values = [1, 2, 1, 1, 3, 1];

  const elements = colors.map((bg_color, index) => {
    return (
      <div
        key={index}
        className={`${bg_color} w-24 h-24 border-solid border rounded-md border-black flex justify-center items-center text-3xl`}
        style={{ flexShrink: shrink_values[index] }}
      >
        {index + 1}
      </div>
    );
  });

  return (
    <>
      <div className="flex border-2 w-96">{elements}</div>
    </>
  );
}
