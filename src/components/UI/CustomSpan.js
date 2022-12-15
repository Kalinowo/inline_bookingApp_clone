import React from "react";

export default function CustomSpan({ children }) {
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    setActive(true);
    let effect = setTimeout(() => setActive(false), 2000);
    return () => clearTimeout(effect);
  }, [children]);

  return (
    <span style={active ? { border: "solid orange 2px" } : null}>
      {children}
    </span>
  );
}
