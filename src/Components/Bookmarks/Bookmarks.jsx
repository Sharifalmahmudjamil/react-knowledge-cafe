import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className=" w-1/2 lg:w-1/3 bg-slate-200 ml-4 mt-10 pt-4 rounded-xl">

            <div className='class="border-solid border-4 border-cyan-600 mx-auto  p-10'>
                <h3 className=' text-center text-3xl text-cyan-500'> Reading Time:{readingTime}</h3>
            </div>


            <h2 className="text-2xl text-pink-500 text-center mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime: PropTypes.number

}
export default Bookmarks;