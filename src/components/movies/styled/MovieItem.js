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
}
 &:nth-of-type(2n) {
    margin-right: 0;
}
@media screen and (min-width: 576px) {
    width: calc(25% - 6px);
    &:nth-of-type(2n) {
      margin-right: 8px;
    }
    &:nth-of-type(4n) {
      margin-right: 0;
    }
}
`