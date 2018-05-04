import styled, { injectGlobal } from 'styled-components';

injectGlobal`
* {
box-sizing: border-box;
}
body {
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  background: white;
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
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  margin: 0 auto 20px;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      padding: 0 20px;
      a {
        text-decoration: none;
      }
    }
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 20px;

  label {
    margin: 0 20px;
  }

  input[type="text"] {
    margin: 0 10px;
  }
`;

export const PhotoBody = styled.div`
  position: relative;
  width: 100%;
  overflow: hodden;
  width: 300px;
  height: auto;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  vertical-align: top;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 3px #ccc;
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
  p {
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.h1`
  text-align: center;
`;
