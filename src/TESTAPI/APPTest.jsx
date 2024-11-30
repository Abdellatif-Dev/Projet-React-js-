import React, { useState, useEffect } from "react";

export default function GeocodeSearchPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeocode = async () => {
      const url = "";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "",
          "x-rapidapi-host": "",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Parse JSON response
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    console.log(data);

    fetchGeocode();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* <h1>Geocode Search Result</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found.</p>
      )} */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
