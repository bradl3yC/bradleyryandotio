import styled from 'styled-components';

const TypingArea = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 500px;
  height: 200px;
  margin-left: 20px;
  margin-bottom: 20px;
  color: #ccc;
  padding: 5px 20px;
  display: ${props => props.hidden ? 'none' : 'block'};

  @media (max-width: 700px) {
    display: none;
  }
`;

export default TypingArea;
