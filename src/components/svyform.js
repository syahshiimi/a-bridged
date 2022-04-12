export default function SVYForm({
  northValue,
  handleNorthInput,
  eastValue,
  handleEastInput,
}) {
  return (
    <>
      <input
        type="text"
        className="c-converter__northinginput"
        placeholder="Northing"
        value={northValue}
        onInput={handleNorthInput}
      />{" "}
      <input
        type="text"
        className="c-converter__eastinginput"
        placeholder="Easting"
        value={eastValue}
        onInput={handleEastInput}
      />{" "}
    </>
  );
}
