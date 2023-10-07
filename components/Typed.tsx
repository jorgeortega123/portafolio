import { H1 } from "cllk";
import React, { useEffect } from "react";
import T from "typed.js";

function Typed() {
  //   useEffect(() => {
  //     var typed = new T(".element", {
  //       strings: ["First ^1000 sentence.", "Second sentence."],
  //       typeSpeed: 60,
  //     });
  //     return () => {
  //       // Destroy Typed instance during cleanup to stop animation
  //       typed.destroy();
  //     };
  //   }, []);

  //   return <H1 className="element"></H1>;
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new T(el.current, {
      strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default Typed;
