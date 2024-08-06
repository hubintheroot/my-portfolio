import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px 0;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export default function AppFooter() {
  return (
    <StyledFooter>
      &copy; 2023 web Front-end portfolio by Sanggeon Pyeon
    </StyledFooter>
  );
}
