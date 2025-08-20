import styled from '@emotion/styled';

export const WriteWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const WriteBox = styled.input`
  border: 1px solid #e9aeaeff;
  padding: 5px;
  width: 200px;
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 1px solid #ffb2b2ff;
    box-shadow: 0 0 3px #ffb2b2aa;
  }
`;
export const WriteButton = styled.button`
  background-color: #ffbfbfff;
  padding: 4px 15px;
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
`;
