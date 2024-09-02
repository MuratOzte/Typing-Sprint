import { ModalHeaderProps } from '@/types/types';

const ModalHeader: React.FC<ModalHeaderProps> = ({
    isRegistering,
    closeModal,
}) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-700">
                {isRegistering ? 'Register' : 'Login'}
            </h2>
            <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-900"
            >
                &#x2715; {/* Close icon */}
            </button>
        </div>
    );
};

export default ModalHeader;
