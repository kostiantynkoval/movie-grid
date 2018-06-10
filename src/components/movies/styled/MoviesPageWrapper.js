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
ul.pagination {
    margin-top: .5rem;
    margin-bottom: .5rem;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
}

ul.pagination li {
    display: inline-block;
    cursor: pointer;
}
ul.pagination li.disabled a {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
}

ul.pagination li:first-child a {
    margin-left: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

ul.pagination li:last-child a {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    margin-right: 0;
}

ul.pagination a:not(:disabled):not(.disabled) {
    cursor: pointer;
}

ul.pagination a {
    position: relative;
    display: block;
    padding: .3rem .5rem;
    line-height: 1;
    font-size: .75em;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    text-decoration: none;
    @media  screen and (min-width: 412px) {
        line-height: 1.25;
        font-size: 1em;
        padding: .5rem .75rem;
    }
}
ul.pagination li.active a {
    z-index: 1;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

ul.pagination a:not(:disabled):not(.disabled) {
    cursor: pointer;
}
ul.pagination a:hover {
    z-index: 2;
    color: #0056b3;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
`