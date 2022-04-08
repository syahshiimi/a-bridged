export default function WGSForm({ value }) {
  return (
    <div className="c-converter__inputcontainer">
      <input
        type="text"
        className="c-converter__firstinput"
        value={value}
        placeholder="Latitude"
      />{" "}
      <input
        type="text"
        className="c-converter__secondinput"
        placeholder="Longitude"
      />{" "}
    </div>
  );
}
