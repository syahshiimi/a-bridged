export default function SVYForm() {
  return (
    <div className="c-converter__inputcontainer">
      <input
        type="text"
        className="c-converter__firstinput"
        placeholder="Northing"
      />{" "}
      <input
        type="text"
        className="c-converter__secondinput"
        placeholder="Easting"
      />
    </div>
  );
}
