import aiAvatar from '../assets/images/ai.png';
import userAvatar from '../assets/images/user.png';

interface MessageProps {
    data: {
        text: string;
        time: string;
        isUser: boolean;
    };
}

export default function Message({ data }: MessageProps) {
    return (
        <div
            className={`px-2 py-4 font-manrope flex items-start gap-2 w-full lg:p-4 lg:w-fit ${
                data.isUser
                    ? ''
                    : 'bg-primary-light/40 rounded-r-[30px] rounded-bl-[30px]'
            }`}
        >
            <img
                src={data.isUser ? userAvatar : aiAvatar} // Shows userAvatar to match with the user's text
                alt=''
                className='w-12 h-10 lg:w-[60px] lg:h-[51px]'
            />

            <div>
                <div className='flex items-center gap-2 text-lg mb-2 lg:mb-4'>
                    <h2 className='font-bold'>
                        {data.isUser ? 'You' : 'Diagnobuddy'}
                    </h2>
                    <span className='font-medium text-xs text-[#6C6C6C] lg:mt-0.5'>
                        {data.time}
                    </span>
                </div>

                <p className='leading-6 lg:text-lg max-w-[600px]'>
                    {data.text}
                </p>
            </div>
        </div>
    );
}
