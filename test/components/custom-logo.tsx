// Desc: Custom Logo for DMIVb
// Usage: <CustomLogo />

export default function CustomLogo() {
    return (
        <>
        <div className="mr-10">
            {/* Custom DMIVb Logo */}
            <div className="flex items-center">
                {/* Media Icon (Film strip and device) */}
                <div className="mr-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="4" width="16" height="12" stroke="#ffffff" strokeWidth="2" />
                        <rect x="14" y="6" width="12" height="2" fill="#ffffff" />
                        <rect x="14" y="10" width="12" height="2" fill="#ffffff" />
                        <rect x="4" y="12" width="4" height="20" fill="#ffffff" />
                        <rect x="8" y="12" width="4" height="20" fill="#ffffff" />
                        <rect x="4" y="12" width="16" height="20" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                </div>
                {/* DMIVb Text */}
                <div className="flex flex-col">
                    <div className="font-bold text-2xl text-yellow-600">DMIVb</div>
                    <div className="text-xs text-yellow-600 -mt-1">doğru yerdesin</div>
                </div>
            </div>
        </div>
        </>
    )
}