import styled from 'styled-components'

export default styled.div`
padding-top: 50px;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: flex-start;
align-content: flex-start;
position: relative;
/* Paginator Properties */
ul.react-paginate {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
}

ul.react-paginate li {
    display: inline-block;
    cursor: pointer;
}

ul.react-paginate .break a {
    cursor: default;
}
`