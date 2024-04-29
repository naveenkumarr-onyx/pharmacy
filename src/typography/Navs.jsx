const Navs = ({ title, href, active }) => {
  const borderBottomStyle = active ? "2px solid green" : "none";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderBottom: borderBottomStyle,
      }}
    >
      <a href={href} className="Nav-heading" style={{ paddingBottom: "5px" }}>
        {title}
      </a>
    </div>
  );
};

export default Navs;
