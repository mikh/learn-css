export default function Order() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];

  const orders = [3, 2, 4, 6, 5, 1];

  const elements = colors.map((bg_color, index) => {
    return (
      <div
        key={index}
        className={`${bg_color} w-24 h-24 border-solid border rounded-md border-black flex justify-center items-center text-3xl`}
        style={{ order: orders[index] }}
      >
        {index}
      </div>
    );
  });

  return (
    <>
      <div className="flex justify-between border-2">{elements}</div>
    </>
  );
}
