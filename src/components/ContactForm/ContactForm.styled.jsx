import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ContForm = styled(Form)`
  margin-bottom: 20px;
  padding: 20px;

  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const Label = styled.label`
  display: block;

  :nth-of-type(1) {
    margin-bottom: 10px;
  }
  :nth-of-type(2) {
    margin-bottom: 20px;
  }
`;

export const InputDescrip = styled.p`
  display: block;
  margin-bottom: 2px;
  font-size: 16px;
  line-height: 1.2;

  color: #757575;
`;

export const ContInput = styled(Field)`
  padding: 5px 10px;

  width: 250px;
  height: 20px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 15px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  background: #f5f4fa;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const ErrMessageText = styled.p`
  display: inline-block;
  margin-left: 5px;

  font-size: 14px;
  line-height: 1.2;

  color: red;
`;
