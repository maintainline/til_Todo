import styled from '@emotion/styled';

export const DetailWrap = styled.li`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DetailEditInput = styled.textarea`
  resize: none; // 박스 칸 늘리기 제거
  font-size: 14px;
  border: 1px solid transparent;
  width: 190px;
  border-radius: 8px;
  padding: 8px;
  transition: box-shadow 0.2s ease-in-out;
  margin: 3px;
  &:focus {
    outline: none;
    border: 1px solid #ffb2b2ff;
    box-shadow: 0 0 3px #ffb2b2aa;
  }
`;

export const DetailEditButtonWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const DetailEditSaveButton = styled.button`
  padding: 4px 10px;
  border: 1px solid #ffb7b7ff;
  border-radius: 7px;
  background-color: #ffb2b2ff;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
`;
export const DetailCancelButton = styled.button`
  padding: 4px 10px;
  border: 1px solid #ffb7b7ff;
  border-radius: 7px;
  background-color: #ffdfdfff;
  color: #fd7070ff;
  font-weight: 500;
  cursor: pointer;
`;
export const DetailbackColor = styled.div`
  display: flex;

  align-items: center;
  background-color: #ffffff;
  padding: 2px;
  gap: 5px;
  margin-bottom: 6px;
  border-radius: 6px;
`;

export const DetailCheckInput = styled.input`
  margin-left: 7px;

  position: relative;
  appearance: none; /* 기본 체크박스 없애기 */
  width: 18px;

  height: 18px;
  border: none;
  background-color: #ffffffff;
  border: 1px solid #ffb2b2;
  border-radius: 4px;
  cursor: pointer;
  :checked {
    background-color: #ffb2b2;
  }
  :checked::after {
    content: '✔';
    color: white;
    position: absolute;
    top: -2px;
    left: 2px;
    font-size: 14px;
  }
`;

export const DetailSpan = styled.span`
  font-size: 14px;
  background-color: white;
  width: 165px;
  padding: 3px;
`;

export const DetailButtonWrap = styled.div`
  display: flex;
  gap: 4px;
  transform: translateY(-3px);
`;

export const DetailSaveButton = styled.button`
  padding: 4px 10px;
  border: 1px solid #ffb7b7ff;
  border-radius: 7px;
  background-color: #ffb2b2ff;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
`;
export const DetailDeletelButton = styled.button`
  padding: 4px 10px;
  border: 1px solid #ffb7b7ff;
  border-radius: 7px;
  background-color: #ffdfdfff;
  color: #fd7070ff;
  font-weight: 500;
  cursor: pointer;
`;
