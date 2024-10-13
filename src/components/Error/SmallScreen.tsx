import sadPanda from '@/assets/error/sadpanda.jpeg';
import Image from 'next/image';

const SmallScreen = () => {
    return (
        <div className="flex w-full h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center w-full p-4 space-y-6 text-center overflow-hidden">
                <Image
                    src={sadPanda}
                    alt="Sad Panda"
                    className="w-64 h-64 object-contain mix-blend-darken"
                />
                <p className="text-2xl font-serif text-gray-700">
                    This site is only available on desktop.
                    <br />
                    Please access it using a desktop computer.
                </p>
                <span className="px-4 py-2 text-sm text-gray-500 border border-gray-300 rounded-md">
                    Thank you for your understanding!
                </span>
            </div>
        </div>
    );
};

export default SmallScreen;
