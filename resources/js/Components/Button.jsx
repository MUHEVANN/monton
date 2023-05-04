import PropTypes from "prop-types";
Button.PropTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "danger",
        "light-outline",
        "white-outline",
    ]),
};
export default function Button({ className, variant, children, ...props }) {
    return (
        <button
            {...props}
            className={`rounded-2xl btn-${variant} py-[13px] text-center w-full`}
        >
            <span className={`text-base ${className}`}>{children}</span>
        </button>
    );
}
