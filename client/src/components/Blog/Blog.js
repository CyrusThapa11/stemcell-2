import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Viewblog from "./Viewblog";
export default function Blog() {
	const [blogs, setBlogs] = useState([]);

	const getdata = async () => {
		const colRef = collection(db, "blogs");

		// const docsSnap = await getDocs(colRef);
		// console.log(docsSnap.data)
		// setnewData(docsSnap)
		// docsSnap.forEach(doc => {
		// 	console.log(doc.data());
		// })

		let blogarray = [];
		const querySnapshot = await getDocs(collection(db, "blogs"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			blogarray.push({ ...doc.data(), id: doc.id });
			// console.log("key --> ", doc.key());
		});
		setBlogs([...blogarray]);
		console.log(blogarray);
	};

	useEffect(() => {
		getdata();
	}, []);

	return (
		<>
			{/*<a className="btn btn-info" href="/addblog" target="_blank">Add a blog</a>
			<div className="container mx-auto my-5">
				<div className="row"></div>
				<div className="container col-4 mx-3 my-3" style={{ width: "18rem" }}>
					<div className="card">
						<div className="card__header bg-dark">
							<img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600" />
						</div>
						<div className="card__body bg-dark d-flex">
							<div className='d-flex justify-content-between'>
								<span className="tag tag-blue text-white ">Category</span>
								<span className='text-white'>20</span>
							</div>

							<h4 className='text-white'>Heading</h4>
							<p className='specificpara text-white' style={{ flexGrow: '1' }}>Brief</p>
							<div className='d-flex justify-content-between'>
								<div className='d-flex flex-column'>
									<small className='text-white '>date</small>
									<small className='text-white '>By:- author</small>
								</div>
								<button type="button" className='btn btn-info'>Take a Read</button>
							</div>
						</div>
					</div>
				</div>
	</div>*/}

			<div className="container mx-auto my-5 fund px-28 py-20 ">
				<div className="row">
					{blogs.length > 0 &&
						blogs.map((element) => {
							return (
								<Viewblog
									key={element.id}
									id={element.id}
									heading={element.heading}
									user={element.user}
									content={element.data}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
}
