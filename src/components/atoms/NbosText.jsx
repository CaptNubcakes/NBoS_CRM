import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

const StyledText = styled('span')(props => ({
  color: props.color,
}))

export const NbosText = ({ text, size, uppercase, bold, color }) => {
  let textClass = `tw-text-${size}`
  textClass = bold ? `${textClass} tw-font-bold` : textClass
  textClass = uppercase ? `${textClass} tw-uppercase` : textClass

  return (
    <StyledText color={color} className={textClass}>
      {text}
    </StyledText>
  )
}

NbosText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ]),
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string,
}

NbosText.defaultProps = {
  text: 'Not provided',
  size: 'base',
  uppercase: false,
  bold: false,
  color: '#000',
}
