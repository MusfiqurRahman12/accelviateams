'use client';

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="video-modal active" id="videoModal" aria-hidden="false">
            <div className="video-modal-overlay" id="videoModalOverlay" onClick={onClose}></div>
            <div className="video-modal-content">
                <button className="video-close" id="videoCloseBtn" aria-label="Close Video" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="video-wrapper">
                    <iframe
                        id="heroVideoIframe"
                        src="https://www.youtube.com/embed/AEXEm5zw7Z8?autoplay=1"
                        title="AccelviaTeams Intro Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
}
