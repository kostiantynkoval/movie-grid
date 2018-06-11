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
  @media screen and (min-width: 524px) {
      background: #666666;
  }
  .nav-item {
      cursor: pointer;
      color: #ddd;
      text-shadow: 0px 0px 6px rgb(0, 0, 0);
      text-transform: uppercase;
  }
`
