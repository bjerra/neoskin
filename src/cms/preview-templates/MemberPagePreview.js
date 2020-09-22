import React from 'react'
import PropTypes from 'prop-types'
import { MemberPageTemplate } from '../../templates/member-page'

const MemberPagePreview = ({ entry, getAsset, widgetFor }) => (
  <MemberPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MemberPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MemberPagePreview
