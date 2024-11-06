export default function GridDisplay() {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];
  const grid_dimensions = [
    [
      [1, 2],
      [2, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [3, 2],
      [3, 1],
    ],
    [
      [4, 1],
      [2, 1],
    ],
    [
      [1, 1],
      [3, 1],
    ],
    [
      [4, 1],
      [4, 1],
    ],
  ];

  const elements = colors.map((bg_color, i) => {
    return (
      <div
        key={i}
        className={`${bg_color} border-solid border rounded-md border-black flex justify-center items-stretch text-3xl`}
        style={{
          gridColumn: `${grid_dimensions[i][0][0]} / span ${grid_dimensions[i][0][1]}`,
          gridRow: `${grid_dimensions[i][1][0]} / span ${grid_dimensions[i][1][1]}`,
        }}
      >
        {i}
        <div
          className="inline-grid w-40 h-40 bg-gray-200/50 rounded-md"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "6px" }}
        >
          <div className="bg-black rounded-md"></div>
          <div className="bg-white rounded-md"></div>
          <div className="bg-cyan-500 rounded-md"></div>
        </div>
        {i}
      </div>
    );
  });
  return (
    <>
      <div
        className="grid border-2"
        style={{
          width: "1000px",
          height: "1000px",
          gridTemplateColumns: "auto auto auto auto",
          gridTemplateRows: "auto auto auto auto",
        }}
      >
        {elements}
      </div>
    </>
  );
}
