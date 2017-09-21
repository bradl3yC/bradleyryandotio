import styled from 'styled-components';

const TopBar = styled.div`
  display: ${props => props.hidden ? 'none' : 'flex'};
  width: 540px;
  background-color: #ccc;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  height: 2vh;
  margin-left: 20px;
  margin-top: 20px;
  padding-top: 3px;
  flex-direction: row;
`;

export default TopBar;
