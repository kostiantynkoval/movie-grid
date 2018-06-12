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
      display: flex;
      align-items: center;
      max-height: 50px;
  }
  .nav-item svg {
      width: 16px;
  }
  .nav-item__back {
      justify-content: flex-start;
  }
  .nav-item__next {
      justify-content: flex-end;
  }
  .nav-item__back .chevron-left__mobile{
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
  }
  .nav-item__next .chevron-right__mobile{
      margin-left: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
  }
  @media screen and (min-width: 768px) {
      .nav-item {
          color: #eee;
          text-shadow: 0px 0px 6px rgb(0, 0, 0);
          text-transform: capitalize;
          display: flex;
          margin-top: 3vh;
          padding-left: 3vw;
          padding-right: 3vw;
      }
      .nav-item svg {
          width: 8px;
      }
      .nav-item__back span:after {
          content: " to list";
      }
      .nav-item__next span:after {
          content: " Movie";
      }
      .nav-item__back .chevron-left__mobile{
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0px 0px 6px rgb(0, 0, 0);
      }
      .nav-item__next .chevron-right__mobile{
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0px 0px 6px rgb(0, 0, 0);
      }
  }
`
