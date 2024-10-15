// @flow
import React from "react"
import type { ContactFieldsProps } from "../../types"

const ContactFields = ({ contactFields }: ContactFieldsProps) => (
  <>
    {contactFields.map((contactField, index) =>
      contactField.url ? (
        <div className="ContactLabel">{contactField.label}
        <p key={"contactField" + index} className={"ContactField"}>
          <a className="FooterLink" href={contactField.url} target="_top">
            {contactField.value}
          </a>
        </p>
        </div>
      ) : (
        <div className="ContactLabel">{contactField.label}
        <p className={"ContactField"} key={"contactField" + index}>
          {contactField.value}
        </p>
        </div>
      )
    )}
  </>
)

export default ContactFields
