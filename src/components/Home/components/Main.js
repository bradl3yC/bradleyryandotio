import styled from 'styled-components';

const Main = styled.div`
  height: 80vh;
  margin: 3vh 3vh;
  padding: 1vh 1vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${props => props.visible ? 'block' : 'none'}
`;

export default Main;
