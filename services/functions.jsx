export const goToUrl = (linkOpen, method) => {
    var link = document.createElement("a");
    link.href = linkOpen;
    if (method === "no-external") {
      link.click();
      return;
    }
    link.target = "_blank";
    link.click();
  };