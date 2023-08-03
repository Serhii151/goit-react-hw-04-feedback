import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  margin: 5px;
  cursor: pointer;

  &:active {
    background-color: #2980b9;
    border-radius: 2px;
  }
`;