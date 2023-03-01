import React from 'react'
import Navbar from '../Components/Navbar.js'
import classes from '../Css/Users.module.css'
export default function Users() {
	return (
		<>
			<Navbar />
			<div className={classes.container}>
				<div className={classes.name1}>
					<div className={classes.box}>
						<div className={classes.photo}>
							<img src="/media/box.svg" alt="" />
						</div>
						<div className={classes.who}>
							<span>Inspector</span>
						</div>
					</div>
					<div className={classes.box}>
						<div className={classes.photo}>
							<img src="/media/bank.svg" alt="" />
						</div>
						<div className={classes.who}>
							<span>Bank</span>
						</div>
					</div>
					<div className={classes.box}>
						<div className={classes.photo}>
							<img src="/media/donor.svg" alt="" />
						</div>
						<div className={classes.who}>
							<span>Donor</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
