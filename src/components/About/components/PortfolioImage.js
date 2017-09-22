import styled from 'styled-components';

const PortfolioImage = styled.img`
  border-radius: 50%;
  width: 15%;
  height: 15%;
  margin: 3vh 10vh;

  @media (max-width: 700px) {
    margin: 2vh 3vh;
  }
`;

export default PortfolioImage;
