import styled from 'styled-components';

export default styled.li`    
    padding: 6px 9px;
    background-color: ${props => props.disabled ? '#666666' : props.active ? '#3399cc' : '#339999'};
    border-bottom: 1px solid #3399cc;
    font-size: 12px;
    line-height: 20px;
    color: ${props => props.disabled ? '#222' : 'white'};
    font-weight: 700;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: ${props => props.disabled ? '#666' : '#3399cc'};
    }
`;
