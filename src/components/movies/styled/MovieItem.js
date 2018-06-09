import styled from 'styled-components'

export default styled.div`
width: 122px;
height: 177px;
display: block;
margin: 10px 15px;
box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.5);
border-radius: 6px;
background: url("${props => props.imageSrc}") center / cover no-repeat;
`