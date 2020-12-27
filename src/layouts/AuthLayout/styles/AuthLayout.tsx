import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f7;
`;

export const Content = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 414px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
  }
`;
