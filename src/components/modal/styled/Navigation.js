import styled from 'styled-components'

export default styled.nav`
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 0 15px;
  background: transparent;
  .nav-item {
      cursor: pointer;
      color: #fff;
      text-shadow: 0px 0px 6px rgb(0, 0, 0);
      text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
      .nav-item {
          color: #eee;
          text-shadow: 0px 0px 6px rgb(0, 0, 0);
          text-transform: capitalize;
      }
      .nav-item__back:after {
          content: " to list";
      }
      .nav-item__next:after {
          content: " Movie";
      }
  }
`
