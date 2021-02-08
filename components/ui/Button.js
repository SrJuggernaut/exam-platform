import propTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = styled.button`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  background-color: ${({ color }) => `var(--color-${color || 'brand'})`};
  color: ${({ color }) => {
    switch (color) {
      case 'light':
      case 'light-var':
      case 'contrast':
        return 'var(--color-dark)'
      case 'brand':
      case 'secondary':
      default:
        return 'var(--color-light)'
    }
  }};
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0);
  padding-left: var(--spacer);
  padding-right: var(--spacer);
  padding-top: calc(var(--spacer) / 2);
  padding-bottom: calc(var(--spacer) / 2);
  &:active {
    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  &:last-of-type{
    border-top-right-radius: calc(var(--spacer) / 2);
    border-bottom-right-radius: calc(var(--spacer) / 2);
  }
  &:first-of-type{
    border-top-left-radius: calc(var(--spacer) / 2);
    border-bottom-left-radius: calc(var(--spacer) / 2);
  }
  &:hover{
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`

Button.propTypes = {
  children: propTypes.node.isRequired,
  color: propTypes.string,
  block: propTypes.bool
}

export default Button
