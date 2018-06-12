import styled from 'styled-components';

export default styled.ul`
    display: ${props => props.opened ? 'inline-block' : 'none'};    
    max-height: 200px;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 33px;
    right: 0;
    width: 120px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
`;
