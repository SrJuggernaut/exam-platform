import styled from '@emotion/styled'
import propTypes from 'prop-types'

const Alert = styled.div`
  border-left: 4px solid ${({ color }) => color ? `var(--color-${color})` : 'var(--color-danger)'} ;
  color: ${({ color }) => color ? `var(--color-${color})` : 'var(--color-danger)'};
  background-color: ${({ color }) => color ? `var(--color-${color}-var)` : 'var(--color-danger-var)'};
  padding: calc(var(--spacer) /2);
  margin-bottom: calc(var(--spacer) /2);
  margin-top: calc(var(--spacer) /2);
`
Alert.propTypes = {
  children: propTypes.node.isRequired,
  color: propTypes.string
}

export default Alert
