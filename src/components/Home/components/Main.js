import styled from 'styled-components';

const Main = styled.div`
  height: 100%;
  margin: 3vh 3vh;
  padding: 1vh 1vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${props => props.visible ? 'block' : 'none'};
  animation: fadein 3s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export default Main;
