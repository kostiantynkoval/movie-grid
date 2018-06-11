import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  background: url('${props => props.constUrl}/${props =>props.path}') no-repeat center / cover;
  max-width: 800px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`