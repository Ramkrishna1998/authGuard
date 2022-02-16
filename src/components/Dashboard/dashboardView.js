
function DashboardView() {
   
    const activityItems = [
        {
            id: 1,
            date: '2021/07/24 16:01:00',
            bookName: 'Harry Potter',
            authorName: 'j.k.rolling',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg',
        },{
            id: 2,
            date: '2021/07/24 16:01:00',
            bookName: 'Harry Potter',
            authorName: 'j.k.rolling',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg',
        },{
            id: 3,
            date: '2021/07/24 16:01:00',
            bookName: 'Harry Potter',
            authorName: 'j.k.rolling',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg',
        },{
            id: 4,
            date: '2021/07/24 16:01:00',
            bookName: 'Harry Potter',
            authorName: 'j.k.rolling',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg',
        },{
            id: 5,
            date: '2021/07/24 16:01:00',
            bookName: 'Harry Potter',
            authorName: 'j.k.rolling',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg',
        },{
            id: 6,
            date: '2021/07/24 16:01:00',
            bookName: 'Harry Potter',
            authorName: 'j.k.rolling',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg',
        },
        
    ]
    return (
        <div className="text-gray-500 w-4/5 px-10 py-7">
            <div className="font-bold text-xl text-gray-500">Book List</div>
            <div className="mt-7 bg-white w-full px-2">
                    <ul role="list" className="divide-y divide-gray-200">
                        {activityItems.map((activityItem) => (
                            <li key={activityItem.id} className="py-4">
                                <div className="flex space-x-3">
                                    <img className="h-4/5 w-12 rounded-none" src={activityItem.imageUrl} alt="" />
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-medium">{activityItem.bookName}</h3>
                                            <button className="text-sm text-white bg-blue-500 rounded-md px-7 py-1">Edit</button>
                                        </div>
                                        <h5 className="text-sm font-medium">By - {activityItem.authorName}</h5>
                                        <p className="text-sm text-gray-500">
                                            Created at- {activityItem.date}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    );
}

export default DashboardView;
