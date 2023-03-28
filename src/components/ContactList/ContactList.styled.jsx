import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  border-bottom: none;

  :last-child {
    border-bottom: 1px solid black;
  }
`;
