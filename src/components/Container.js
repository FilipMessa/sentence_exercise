import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Container;
