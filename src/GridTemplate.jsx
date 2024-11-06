function generateSection(name, style) {
  const colors = [
    "bg-slate-400",
    "bg-red-800",
    "bg-sky-500",
    "bg-purple-600",
    "bg-green-300",
    "bg-orange-600",
  ];

  const elements = colors.map((bg_color, i) => {
    return (
      <div
        key={i}
        className={`${bg_color} border-solid border rounded-md border-black flex justify-center items-stretch text-3xl`}
      >
        {i}
      </div>
    );
  });

  return (
    <>
      <h1>{name}</h1>
      <div className="grid bg-gray-700/50 rounded-md p-2" style={style}>
        {elements}
      </div>
    </>
  );
}

//TODO: grid-template-rows is not correct
export default function GridTemplate() {
  return (
    <>
      {generateSection("grid-template-columns-2fr", {
        gridTemplateColumns: "1fr 1fr",
        gap: "4px",
        width: "100px",
      })}
      {generateSection("grid-template-columns-minmax", {
        gridTemplateColumns: "minmax(10px, 1fr) 3fr",
        gap: "4px",
        width: "100px",
      })}
      {generateSection("grid-template-columns-repeat", {
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "4px",
        width: "100px",
      })}
      {generateSection("grid-template-columns-auto", {
        gridTemplateColumns: "10px auto 30px 1fr",
        gap: "4px",
        width: "100px",
      })}
      {generateSection("grid-template-rows-2fr", {
        gridTemplateRows: "1fr 1fr",
        gap: "4px",
        height: "100px",
        width: "200px",
      })}
      {generateSection("grid-template-rows-minmax", {
        gridTemplateRows: "minmax(10px, 1fr) 3fr",
        gap: "4px",
        height: "100px",
      })}
      {generateSection("grid-template-rows-repeat", {
        gridTemplateRows: "repeat(4, 1fr)",
        gap: "4px",
        height: "100px",
      })}
      {generateSection("grid-template-rows-auto", {
        gridTemplateRows: "10px auto 30px 1fr",
        gap: "4px",
        height: "100px",
      })}
    </>
  );
}
