const $currentScript = document.currentScript;
const client = $currentScript.getAttribute("data-client");
if (!window.MEMBERSHIP_CUSTOMIZER_CLIENT_ID) {
  window.MEMBERSHIP_CUSTOMIZER_CLIENT_ID = client;
  if (location.href.includes("membershipeditor=true")) {
    setTimeout(() => {
      document.body.classList.add("template-ready");
    }, 1000);
  }
  fetch("https://membershipeditor.netlify.app/src/editor.html", { priority: "high" })
    .then((r) => r.text())
    .then((h) => {
      let d = document.createElement("div");
      d.innerHTML = h;
      d.querySelectorAll("style,link,div,section").forEach((e) =>
        document.head.append(e),
      );
      d.querySelectorAll("script").forEach((s) => {
        let sc = document.createElement("script");
        sc.src =
          s.src ||
          URL.createObjectURL(
            new Blob([s.textContent], { type: "text/javascript" }),
          );
        document.head.append(sc);
      });
    });
}