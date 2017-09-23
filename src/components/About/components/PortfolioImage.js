import styled from 'styled-components';

const PortfolioImage = styled.img`

  @media (max-width: 1024px) {
    border-radius: 50%;
    width: 15%;
    height: 15%;
    margin: 3vh 3vh;
  }

  @media (max-width: 700px) {
    border-radius: 50%;
    margin: 7% 7%;
    width: 35%;
    height: 35%;
  }

  @media (max-width: 768px) {
    border-radius: 50%;
    margin: 5% 5%;
    width: 20%;
    height: 20%;
  }

`;

export default PortfolioImage;
