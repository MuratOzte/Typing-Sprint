import { AvatarProps } from '@/types/types';

const Avatar: React.FC<AvatarProps> = ({
    img,
    name,
    rank,
    logoutHandler,
    language,
}) => {
    return (
        <div className="flex items-center gap-4 bg-transparent">
            <img
                className="w-12 h-12 rounded-full object-cover"
                src={
                    img ||
                    'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
                }
                alt={name || 'user'}
                draggable={false}
            />
            <div className="flex flex-col items-start text-center">
                <div className="text-lg font-semibold text-black text-center">
                    {name}
                </div>
                <button
                    onClick={logoutHandler}
                    className="mt-2 text-sm text-gray-700 bg-gray-300 px-4 py-1 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    {language === 'tr' ? 'Çıkış Yap' : 'Logout'}
                </button>
            </div>
        </div>
    );
};

export default Avatar;
