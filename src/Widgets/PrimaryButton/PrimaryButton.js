import React from "react"
import './style.scss'

function PrimaryButton(props) {
    const { isDisabled, isOutlined, onClick, label, iconUrl } = props
    const className = [
        'button',
        "",
        isOutlined ? 'outlined' : "",
        isDisabled && isOutlined ? 'disabledOutline' : "",
        isDisabled && !isOutlined ? 'disabled' : "",
    ].join(" ")
    return (
        <button className={className} onClick={onClick} disabled={isDisabled}>
            {iconUrl ? <img src={iconUrl} className={'imageSpan'} alt="Icon" title="button" /> : null}
            <span className={`bodySemiBold ${'btnText'}`}>{label}</span>
        </button>
    )
}

export default PrimaryButton
