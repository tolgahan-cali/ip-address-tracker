import { useEffect, useRef } from "react";
import iconArrow from "../assets/icon-arrow.svg";

export function Header({ ipInput, setIpInput, handleGetLocation }) {
  const searchInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    handleGetLocation();
  }

  function inputFocus(e) {
    if (e.key === "Enter") {
      searchInput.current.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", inputFocus);

    return () => {
      document.removeEventListener("keydown", inputFocus);
    };
  }, []);
  return (
    <>
      <h1 className="header-title">IP Address Tracker</h1>

      <form className="input-container" onSubmit={handleSubmit}>
        <input
          ref={searchInput}
          value={ipInput}
          onChange={(e) => setIpInput(e.target.value)}
          type="text"
          className="search-bar"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit" className="search-btn">
          <img src={iconArrow} alt=">" />
        </button>
      </form>
    </>
  );
}
