import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { DayProps, TooltipFaceProps } from './types';

const Container = styled.div`
    width: 99vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    padding-bottom: 10em;
    position: relative;

    h1 {
        font-size: 2.5rem;  
        width: 100%;
        text-align: center;
        margin-top: 1rem;
    }
`;

const Month = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    padding: 1em;
    width: 20em;
    height: 15em;
    border-radius: 0.5em;
    background-color: #f5f5f5;
`;
const Day = styled.div<DayProps>`
  padding: 0.25em;
  font-weight: bold;
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.color || 'transparent'};
`;

const Tooltip = styled(ReactTooltip)`
    
`;

const TooltipFace = styled.div<TooltipFaceProps>`
  width: 3em;
  height: 3em;
  padding: 0.5em;
  border-radius: 50%;
  cursor: pointer;
  float: left;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: ${props => props.color};
  }
`;

export { Container, Month, Day, Tooltip, TooltipFace };