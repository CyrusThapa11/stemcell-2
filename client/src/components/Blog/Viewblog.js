import React from 'react';

export default function Viewblog(props) {
	const htmlString = props.content
	const div = document.createElement('div');
	div.innerHTML = htmlString;
	const ntext = div.textContent;

	const handleonClick = (e) => {
		console.log('clicked')
		const id = e.target.id
		window.location.href = `/readblog?id=${id}`

	}

	return (
		<>
			<div className="flex my-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390" alt="" />
				<div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{props.heading}</h5>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By:- {props.user}</p>
					<button type="button" onClick={handleonClick} id={props.id} className='btn btn-info'>Take a Read</button>

					{/* <div dangerouslySetInnerHTML={{ __html: props.content }} className='text-dark' ></div> */}

				</div>
			</div>
		</>
	)
}
