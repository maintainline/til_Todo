import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const fadeOut = keyframes`
  80% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
`;
export const Popup = styled.div`
  color: #e74747ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
  font-weight: bold;
  animation: ${fadeOut} 2s forwards;
`;

export const Container = styled.div`
  background: #fffafeff;
  margin: 0 auto;
  height: 100vh;
  padding-top: 50px;
`;
export const TodoWarp = styled.div`
  background-color: white;
  border-radius: 15px;
  margin: 0 auto;
  width: 375px;
  min-height: 100px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
`;

export const TodoTitle = styled.div`
  color: #e74747ff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e9aeaeff;
  font-size: 20px;
  font-weight: 600;
`;

export const TodoSubContent = styled.div`
  padding: 20px;
`;
