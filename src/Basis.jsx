export default function Basis() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];

  const basis_values = ["auto", "0", "100px", "200px", "content", "20%"];

  const elements = colors.map((bg_color, index) => {
    return (
      <div
        key={index}
        className={`${bg_color} w-24 h-24 border-solid border rounded-md border-black flex justify-center items-center text-3xl`}
        style={{ flexBasis: basis_values[index] }}
      >
        {basis_values[index]}
      </div>
    );
  });

  return (
    <>
      <div className="flex border-2" style={{ width: "1000px" }}>
        {elements}
      </div>
    </>
  );
}
