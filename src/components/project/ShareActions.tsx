import { useState } from 'react';
import { FiCopy, FiCheck, FiShare2 } from 'react-icons/fi';

export const ShareActions = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2000);
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text: description,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      alert('Sharing not supported');
    }
  };

  return (
    <>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={copyLink}
          className="p-2 text-md hover:text-purple shadow-surface border border-darkText/10 shadow-md hover:shadow-purple transition-shadow duration-300 rounded"
        >
          <span className="block sm:hidden text-2xl">
            {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
          </span>

          <span className="hidden sm:flex items-center gap-2">
            {copied ? (
              <>
                <FiCheck className="text-green-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FiCopy />
                <span>Copy link</span>
              </>
            )}
          </span>
        </button>

        <button
          onClick={shareLink}
          className="p-2 text-md hover:text-purple shadow-surface border border-darkText/10 shadow-md hover:shadow-purple transition-shadow duration-300 rounded"
        >
          <span className="block sm:hidden text-2xl">
            <FiShare2 />
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <FiShare2 />
            <span>Share</span>
          </span>
        </button>
      </div>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-purple text-white px-5 py-2 rounded shadow-md z-50 text-sm">
          Link copied to clipboard!
        </div>
      )}
    </>
  );
};
