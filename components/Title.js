
import { MJMLElement } from 'mjml-core'
import merge from 'lodash/merge'
import MJMLText from 'mjml-text'
import React, { Component } from 'react'

import {
  registerMJElement,
} from 'mjml'

const tagName = 'mj-title'
const endingTag = false
const columnElement = false

//These are your default css attributes
const defaultMJMLDefinition = {
  attributes: {
    'color': '#424242',
    'font-family': 'Helvetica',
    'margin-top': '10px'
  }
}

@MJMLElement
class Title extends Component {

  /*
   * Build your styling here
   */
  getStyles() {
    const { mjAttribute, color } = this.props

    return merge({}, this.constructor.baseStyles, {
      text: {
      /*
       * Get the color attribute
       * Example: <mj-title color="blue">content</mj-title>
       */
        color: mjAttribute('color'),
        fontSize: '14px'
      }
    })
  }

  render() {

    const css = this.getStyles(),
          content = 'Hello World!'

    //return (
    //  <MjText style={ css }>
    //    { content }
    //  </MjText>
    //)

    // TODO temporary fix, remove when mjml is updated
    return (
      <MJMLText style={css}>
        {content}
      </MJMLText>
    )
  }
}

Title.tagName = tagName
Title.defaultMJMLDefinition = defaultMJMLDefinition
Title.endingTag = endingTag
Title.columnElement = columnElement

registerMJElement(Title)
export default Title
