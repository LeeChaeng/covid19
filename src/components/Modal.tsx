import { FC } from "react";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./Header";
import { ModalProps } from "./Status";

const Modal: FC<ModalProps> = ({ handleModal }) => {
  return (
    <Container>
      <Content>
        <Box>
          <StyledButton
            onClick={() => {
              handleModal(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </StyledButton>
        </Box>
        <div>
          개발자 <StrongText>이채영</StrongText>
          <br />
          <a href="mailto:htijl@naver.com">htijl@naver.com</a>
        </div>
        <br />
        <div>
          디자이너 <StrongText>노아정</StrongText>
          <br />
          <a href="mailto:thsu2048@naver.com">thsu2048@naver.com</a>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background: rgba(196, 196, 196, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 1rem;
  width: 240px;
  height: auto;
  text-align: center;
  border-radius: 8px;
  font-size: 12px;
  padding-bottom: 24px;

  a {
    color: black;
    font-weight: bold;
  }
`;

const StrongText = styled.span`
  font-weight: bold;
`;

const Box = styled.div`
  text-align: right;
`;

export default Modal;
