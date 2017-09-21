import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  margin: 3vh 3vh;
  padding: 1vh 1vh;
  background-color: rgba(255, 255, 0255, 0.3);
  display: ${props => props.visible ? 'block' : 'none'}
`;

export default Main;
