import React, { useState, useEffect } from "react";
import { Parser } from "@asyncapi/parser";

const AsyncApiParser = ({ apiDocument }) => {
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const parseAsyncAPI = async () => {
      try {
        const parser = new Parser();
        const parsed = await parser.parse(apiDocument);
        setParsedData(parsed.document);
      } catch (err) {
        setError(err.message);
      }
    };

    parseAsyncAPI();
  }, [apiDocument]);

  return (
    <div>
      <h2>AsyncAPI Parsed Data</h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(parsedData, null, 2)}</pre>
      )}
    </div>
  );
};

export default AsyncApiParser;
