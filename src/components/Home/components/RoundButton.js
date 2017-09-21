import styled from 'styled-components';

const RoundButton = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color};
  height: auto;
  height: 12px;
  width: 12px;
  margin-left: 5px;
`;

export default RoundButton;
