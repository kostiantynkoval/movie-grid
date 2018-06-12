import styled from 'styled-components';

export default styled.span`    
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 28px;
    box-sizing: border-box;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    display: block;
`;
