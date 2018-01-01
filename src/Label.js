import React from 'react'
import { Text, View, Platform } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import defaultTheme from './Theme'

const LabelWrapper = styled.View`
  flex: 1;
  flex-direction: 'column';
  flex-direction: column;
  justify-content: center;
  padding-left: ${Platform.OS === 'android' ? 5 : 0};
  marginTop: 5};
`

const LabelText = styled.Text`
  color: ${props => props.theme.Label.color};
  font-size: ${props => props.theme.Label.fontSize};
`

LabelText.defaultProps = {
  theme: defaultTheme,
  componentName: 'Label',
}

const Label = props => {
  const { children, theme } = props

  return (
    <LabelWrapper theme={theme}>
      <LabelText theme={theme} >{ children }</LabelText>
    </LabelWrapper>
  )
}

Label.PropTypes = {
  children: PropTypes.string.isRequired
}

export default Label
