import { useEffect, useState } from "react";

export function UseResponsiveWidth() {
  const [width, setWidth] = useState("600");

  useEffect(() => {
    function getWidth() {
      if (window.innerWidth <= 425) {
        setWidth("330");
      } else if (window.innerWidth < 768 && window.innerWidth > 425) {
        setWidth("550");
      } else if (window.innerWidth === 768) {
        setWidth("300");
      } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setWidth("300");
      } else if (window.innerWidth < 1090 && window.innerWidth >= 1024) {
        setWidth("500");
      } else {
        setWidth("600");
      }
    }
    getWidth();

    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);
  return width;
}
