import { css } from "styled-components";

const typewriterAnimation = css`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${({ children }) =>
    `typing ${children.length / 8.5}s steps(${
      children.length
    }, end), blink-caret 0.5s step-end infinite`};

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

export default typewriterAnimation;
