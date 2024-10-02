export default function Basis() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];

  // TODO: Figure out basis

  const basis_values = ["auto", "auto", "auto", "auto", "auto", "auto"];

  const elements = colors.map((bg_color, index) => {
    return (
      <div
        key={index}
        className={`${bg_color} w-24 h-24 border-solid border rounded-md border-black flex justify-center items-center text-3xl`}
        style={{ flexBasis: basis_values[index] }}
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
