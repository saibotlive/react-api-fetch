import styled, { injectGlobal } from 'styled-components';

injectGlobal`
* {
box-sizing: border-box;
}
body {
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  background: lightgrey;
}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${props => props.bgURL});
  background-size: cover;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ErrorMessage = styled.h1`
  text-align: center;
`;
