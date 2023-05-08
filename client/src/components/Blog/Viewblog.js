import React from 'react'

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
			<div className="max-w-sm w-full lg:max-w-full lg:flex my-5 ">
				<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
				</div>
				<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="mb-8">
						{/* <p className="text-sm text-gray-600 flex items-center">
							<svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
							</svg>
							Members only
						</p> */}
						<div className="text-gray-900 font-bold text-xl mb-2">{props.heading}</div>
						<p className="text-gray-700 text-base">This Blog is written by our customer. So the writer is responsible for all the details provided by him/her and the company is not entitled to make any changes in the provided details</p>
					</div>
					<div className="flex mb-4">
						<div className="flex w-3/4">
							<img className="w-10 h-10 rounded-full mr-4" src="/836.jpg" alt="Avatar of Jonathan Reinink" />
							{/* <div className="text-sm"> */}
							<p className="text-gray-900 leading-none">{props.user}</p>
							{/* <p className="text-gray-600">Aug 18</p> */}
							{/* </div> */}
						</div>

						<button type="button" onClick={handleonClick} id={props.id} style={{ background: '#c536ab', border: '2px solid white', borderRadius: '10px' }} className='btn btn-info w-1/6 text-white'>Take a Read</button>

					</div>


				</div>
			</div>
			{/* ----------------------------		 */}
			{/* <div className="flex my-3 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390" alt="" />
				<div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{props.heading}</h5>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By:- {props.user}</p>
					<button type="button" onClick={handleonClick} id={props.id} className='btn btn-info'>Take a Read</button> */}

			{/* <div dangerouslySetInnerHTML={{ __html: props.content }} className='text-dark' ></div> */}
			{/* 
				</div>
			</div> */}
		</>
	)
}
