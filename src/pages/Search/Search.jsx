import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
    return (
        <div>
            <div className="mt-12 w-full  flex justify-center">
                <input className="px-5 py-2 w-[30rem] text-black" type="text" placeholder="Search Course Content" />
                <button className='bg-[#46A2DE] px-5 '> <AiOutlineSearch /> </button>
            </div>
            <div>
                <div className='text-center mt-10'>
                    <h1 className='text-2xl font-bold'>Start a New Search</h1>
                    <p>To find captions, lectures or resources</p>
                </div>
            </div>
        </div>
    );
};

export default Search;