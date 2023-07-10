import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Review = () => {
    return (
        <div className="mx-20 mt-5">
            <h1 className="text-3xl font-bold">Student FeedBack</h1>
            <div className='flex items-center gap-16'>
                <div className="mt-5">
                    <h1 className="text-8xl font-bold"> 3.7</h1>
                    <h1 className='pl-3 w-[7rem]'><Rating value={3} /></h1>
                    <h1 className='pl-3'>Course Rating</h1>
                </div>

                <div className='flex flex-col mt-5'>
                    <div className='flex items-center gap-3'><progress className="progress progress-secondary w-[25rem]" value="100" max="100"></progress> <h1>5 star</h1></div>
                    <div className='flex items-center gap-3'><progress className="progress progress-secondary w-[25rem]" value="60" max="100"></progress> <h1>4 star</h1></div>
                    <div className='flex items-center gap-3'><progress className="progress progress-secondary w-[25rem]" value="50" max="100"></progress> <h1>3 star</h1></div>
                    <div className='flex items-center gap-3'><progress className="progress progress-secondary w-[25rem]" value="30" max="100"></progress> <h1>2 star</h1></div>
                    <div className='flex items-center gap-3'><progress className="progress progress-secondary w-[25rem]" value="10" max="100"></progress> <h1>1 star</h1></div>
                </div>
            </div>
        </div>
    );
};

export default Review;