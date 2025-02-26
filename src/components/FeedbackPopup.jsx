import { useState } from "react";

const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(true); // Set true to open automatically

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-primary-hover"
            >
              X
            </button>
            {/* Dialog Content */}
            <h2 className="text-xl font-bold text-primary mb-4 text-[#3A55B4]">
              Dari mana Anda mengetahui tentang kami?
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="feedback" value="Facebook" />
                  Facebook
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="feedback" value="Instagram" />
                  Instagram
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="feedback" value="Tiktok" />
                  Tiktok
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="feedback" value="Google" />
                  Google
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="feedback" value="Brosur" />
                  Brosur
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="feedback"
                    value="Teman/Keluarga"
                  />
                  Teman/Keluarga
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="feedback" value="Lainnya" />
                  Lainnya
                </label>
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-primary-base text-white rounded hover:bg-primary-hover"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackPopup;
