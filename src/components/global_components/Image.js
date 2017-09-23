import styled from 'styled-components';

const Image = styled.img`
  width: 5%;
  margin: 0 50px;
  color: white;

  @media (max-width: 768px) {
    width: 10%;
    margin: 0 20px;
  }

  @media (max-width: 1024px) {
    width: 10%;
    margin: 0 20px;
  }
`;

export default Image;
