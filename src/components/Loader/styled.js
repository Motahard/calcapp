import styled from 'styled-components'
import BaseLoader from 'react-loader-spinner'

export const Loader = styled(BaseLoader)`
  position: fixed;
  top: 50%;
  left: 45%;
  color: ${props => props.theme.colors.primaryBackColor};
`
