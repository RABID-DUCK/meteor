import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Meteor } from "meteor/meteor";
import { observeTranslations } from "./translationObserver";

Meteor.startup(() => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }

  setTimeout(() => observeTranslations(), 50);
});