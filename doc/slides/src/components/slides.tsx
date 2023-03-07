import * as React from "react";
import styled from "@emotion/styled";
import Reveal from "reveal.js/dist/reveal.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import RevealSearch from "reveal.js/plugin/search/search.esm.js";
import RevealVerticator from "reveal.js-verticator/plugin/verticator/verticator.esm.js";

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js-verticator/plugin/verticator/verticator.css";

const FillViewport = styled.div({
  width: "100vw",
  height: "100vh",
});

type Props = {
  slides: Array<{ html: string; nr: number }>;
};

export default ({ slides }: Props) => {
  const container = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (container.current) {
      const deck = new Reveal(container.current, {
        embedded: true,
        slideNumber: "c/t",
        transitionSpeed: "fast",
        verticator: {
          darktheme: true,
        },
        hash: true,
        pdfSeparateFragments: false,
        plugins: [RevealHighlight, RevealNotes, RevealSearch, RevealVerticator],
      });
      deck.initialize();
    }
  }, [container]);

  return (
    <FillViewport>
      <div ref={container} className={"reveal"}>
        <div className={"slides"}>
          {slides.map((e) => (
            <section
              key={e.nr}
              dangerouslySetInnerHTML={{
                __html: e.html,
              }}
            ></section>
          ))}
        </div>
      </div>
    </FillViewport>
  );
};
