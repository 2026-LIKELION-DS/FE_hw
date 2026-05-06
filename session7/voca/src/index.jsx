import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
  }

  ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

export const AppWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const Headerstyle = styled.header`
  position: relative;
`;

export const HeaderMenu = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

export const HeaderLink = styled.span`
  border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
`;

export const DayListstyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const DayListItem = styled.li`
  flex: 20% 0 0;
  box-sizing: border-box;
  padding: 10px;
`;

export const DayLink = styled.a`
  display: block;
  padding: 20px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: dodgerblue;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableData = styled.td`
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;

  &:first-child {
    width: 10%;
  }

  ${props => props.isOff && `
    background: #eee;
    color: #ccc;
  `}
`;

export const TableRow = styled.tr`
  ${(props) =>
    props.isDone &&
    `
    td {
      background: #eee;
      color: #ccc;
    }
  `}
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: 0 none;
  border-radius: 6px;
  color: #fff;
  background-color: dodgerblue;
`;

export const DeleteButton = styled(Button)`
  margin-left: 10px;
  background-color: firebrick;
`;

export const InputArea = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
`;

export const Select = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
`;