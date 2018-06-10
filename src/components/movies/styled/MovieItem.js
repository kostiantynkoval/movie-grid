import styled from 'styled-components'

export default styled.div`
font-size: 16px; 
display: inline-block;
margin-bottom: 8px;
width: calc(50% - 4px);
margin-right: 8px;
box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.5);
border-radius: 6px;
overflow: hidden;
img {
display: block;
margin: 0;
padding: 0;
width: 100%;
cursor: pointer;
}
 &:nth-of-type(2n) {
    margin-right: 0;
}
@media screen and (min-width: 412px) {
    width: calc(33% - 6px);
    &:nth-of-type(2n) {
      margin-right: 8px;
    }
    &:nth-of-type(3n) {
      margin-right: 0;
    }
}
@media screen and (min-width: 576px) {
    width: calc(25% - 6px);
    &:nth-of-type(3n) {
      margin-right: 8px;
    }
    &:nth-of-type(4n) {
      margin-right: 0;
    }
}
@media screen and (min-width: 768px) {
    width: calc(20% - 8px);
    &:nth-of-type(4n) {
      margin-right: 8px;
    }
    &:nth-of-type(5n) {
      margin-right: 0;
    }
}
@media screen and (min-width: 992px) {
    width: calc(16.66% - 7px);
    &:nth-of-type(5n) {
      margin-right: 8px;
    }
    &:nth-of-type(6n) {
      margin-right: 0;
    }
}
`