import styled from 'styled-components'

export default styled.div`
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
  > div {
    margin: 10px;
    display: flex;
    flex-flow: column nowrap;
  }
  div.image-wrapper {
      width: 50%;
      align-items: flex-end;
      img {
       width: 160px;
       display: block;
       border-radius: 6px;
       box-shadow: 0 0 15px -1px rgb(0,0,0);
    }
  }
  div.total-info-wrapper {
      width: 50%;
      display: flex;
      flex-flow: column nowrap;
      .title-web {
          display: none;
      }
      .description-web {
          display: none;
      }
  }
  div.info-wrapper {
      display: flex;
      flex-flow: column nowrap;
      margin-left: 0;
      padding-bottom: 1.5em;
      justify-content: space-between;
      text-shadow: 0px 0px 6px rgb(0, 0, 0);
      text-transform: capitalize;
      height: 100%;
      >div {
          display: flex;
          flex-flow: column nowrap;
      }
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
@media screen and (min-width: 768px) {
    margin-top: 15vh;
    div.image-wrapper {
        width: 30%;
        img {
            width: 80%;
        }
    }
    div.total-info-wrapper {
        width: 70%;
        flex-flow: column nowrap;
        .title-web {
            display: block;
        }
        .description-web {
            display: block;
        }
    }
    div.info-wrapper {
        flex-flow: row nowrap;
        margin-left: 15px;
        justify-content: flex-start;
        height: auto;
        >div {
          display: flex;
          flex-flow: row nowrap;
        }
        >div:not(:first-child):before {
            content: '';
            margin-left: 15px;
            padding-left: 15px;
            border-left: 1px solid rgba(255,255,255,0.5);
        }
        >div>div:last-child {
          font-size: 1em;
          font-weight: normal;
          color: #ddd;
        }
        >div>div:first-child:after {
            content: " ";
            white-space: pre;
        }
    }
}
`