import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 24px;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectCard = styled.div<{color?: string}>`
  height: 208px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px 24px;
  background-color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 8px;
    background-color: ${({color}) => (color ? color : '#000')};
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    margin-bottom: 16px;
  }
`;

export const Owner = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  position: absolute;
  left: 24px;
  bottom: 16px;
  border-radius: 50%;
`;
