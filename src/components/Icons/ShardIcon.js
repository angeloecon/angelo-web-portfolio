const ShardIcon = ({ className }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main Double Arrow Shape */}
            <path
                d="M30 20 L70 50 L30 80 L50 50 Z"
                fill="#22d3ee"
                className="opacity-90"
            />
            <path
                d="M50 50 L30 20 L30 80 Z"
                fill="#0891b2"
                className="opacity-70"
            />
            {/* Glow Element */}
            <circle cx="50" cy="50" r="10" fill="#ccfbf1" className="blur-xl opacity-50 animate-pulse" />
        </svg>
    )
}

export default ShardIcon
