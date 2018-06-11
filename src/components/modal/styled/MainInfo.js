import styled from 'styled-components'

export default styled.div`
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 25px 0;
  > div {
    width: 50%;
    margin: 10px;
    display: flex;
    flex-flow: column nowrap;
    img {
       width: 100%;
       display: block;
       border-radius: 6px;
       box-shadow: 0 0 15px -1px rgb(0,0,0);
    }
  }
  div.info-wrapper {
      display: flex;
      flex-flow: column nowrap;
      padding-bottom: 1.5em;
      justify-content: space-between;
      text-shadow: 0px 0px 6px rgb(0, 0, 0);
      text-transform: capitalize;
      >div>div:first-child {
          font-size: 1em;
          color: #ddd;
      }
      >div>div:last-child {
          font-size: 1.25em;
          font-weight: bold;
          color: #eee;
      }
  }
`