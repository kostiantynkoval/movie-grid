import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  background: rgba(40,40,40,.95) url('${props => props.constUrl}/${props =>props.path}') no-repeat center / cover;
  max-width: 800px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  .title-mobile{
      display: block;
  }
  .description-mobile {
      display: block;
  }
  @media screen and (min-width: 768px) {
      max-width: none;
      .title-mobile{
          display: none;
      }
      .description-mobile {
          display: none;
      }
  }
`