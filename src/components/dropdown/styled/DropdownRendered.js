import styled from 'styled-components';

export default styled.span`
    color: white;
    line-height: 28px;
    font-weight: 400;
    display: none;
    padding-left: 8px;
    padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    @media (min-width: 576px) {
        display: block;
    }
    /*@media (min-width: 768px) {
        padding-top: 2px;
        padding-bottom: 0;
        font-size: 16px;
        line-height: 26px;
        padding-right: 20px;
    }*/
`;
