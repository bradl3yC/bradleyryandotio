import styled from 'styled-components';

const Main = styled.div`
  height: 100%;
  width: 88%;
  margin: 2% 2%;
  padding: 1% 1%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: fadein 3s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @media (max-width: 1024px) {
    height: 100%;
    width: 94%;
  }

  @media (max-width: 700px) {
    display: block;
    margin: 4% 4%;
    width: 90%;
  }
`;

export default Main;
