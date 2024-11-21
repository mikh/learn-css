export default function GridArea() {
  return (
    <>
      <div
        className="grid bg-gray-700/50 rounded-md p-10 m-10"
        style={{
          display: "grid",
          width: "800px",
          height: "600px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          gridTemplateAreas: `"header header header ."
             "side side . ." 
             ". down down down" 
             ". footer footer footer"`,
          columnGap: "10px",
          rowGap: "20px",
        }}
      >
        <div
          className="bg-red-800 border-solid border rounded-md border-black flex justify-center items-stretch text-3xl"
          style={{ gridArea: "header" }}
        >
          1
        </div>
        <div
          className="bg-sky-500 border-solid border rounded-md border-black flex justify-center items-stretch text-3xl"
          style={{ gridArea: "side" }}
        >
          2
        </div>
        <div
          className="bg-purple-600 border-solid border rounded-md border-black flex justify-center items-stretch text-3xl"
          style={{ gridArea: "down" }}
        >
          3
        </div>
        <div
          className="bg-green-300 border-solid border rounded-md border-black flex justify-center items-stretch text-3xl"
          style={{ gridArea: "footer" }}
        >
          4
        </div>
      </div>
    </>
  );
}
