function Navbar({ setSelectedFlower }) {
  return (
    <nav className="navbar">
      <button onClick={() => setSelectedFlower("rose")}>🌹 Rose</button>
      <button onClick={() => setSelectedFlower("lily")}>🌼 Lily</button>
      <button onClick={() => setSelectedFlower("jasmine")}>🌷 Jasmine</button>
    </nav>
  );
}

export default Navbar;