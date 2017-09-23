import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Inconsolata', monospace;
  margin-bottom: 0;
  color: #ccc;
  margin-left: 2%;

  @media (max-width: 700px) {
    font-size: 1em;
    margin-right: 0;
  }
`;

export default Heading;
