export default function WGSForm({
  latValue,
  handleLatInput,
  lonValue,
  handleLonInput,
}) {
  return (
    <>
      <input
        type="text"
        className="c-converter__latitudeinput"
        placeholder="Latitude"
        value={latValue}
        onInput={handleLatInput}
      />{" "}
      <input
        type="text"
        className="c-converter__longitudeinput"
        placeholder="Longitude"
        value={lonValue}
        onInput={handleLonInput}
      />{" "}
    </>
  );
}
