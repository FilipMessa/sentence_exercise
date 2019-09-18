import { css } from "styled-components";
import Cursor from "../assets/cursor.png";
import ActiveCursor from "../assets/cursor-click.png";

const CustomCursor = css`
  &:hover {
    cursor: url(${Cursor}), auto;
  }
  &:active {
    cursor: url(${ActiveCursor}), auto;
  }
`;

export default CustomCursor;
