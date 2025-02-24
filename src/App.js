import React from "react";
import AsyncApiParser from "./AsyncApiParser";

const asyncApiJson = `
{
  "asyncapi": "2.4.0",
  "info": {
    "title": "Example AsyncAPI specification",
    "version": "0.1.0"
  },
  "channels": {
    "example-channel": {
      "subscribe": {
        "message": {
          "payload": {
            "type": "object",
            "properties": {
              "exampleField": {
                "type": "string"
              },
              "exampleNumber": {
                "type": "number"
              },
              "exampleDate": {
                "type": "string",
                "format": "date-time"
              }
            }
          }
        }
      }
    }
  }
}`;

function App() {
  return (
    <div>
      <h1>Async API Parser Example</h1>
      <AsyncApiParser apiDocument={asyncApiJson} />
    </div>
  );
}

export default App;
