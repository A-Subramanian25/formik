import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Frm from "./formik";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Frm />
  </StrictMode>
);
