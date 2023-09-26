if (document.readyState === "complete") {
  inject();
} else {
  document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "complete") {
      inject();
    }
  });
}

function inject() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("injected-ns-script.js");
  document.documentElement.append(script);
}
