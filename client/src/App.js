/* eslint-disable no-unused-vars */
import { EthContext, EthProvider } from "./contexts/EthContext";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Banks/Home";
import Register from "./components/Banks/Register";
import Dashboards from "./components/Banks/Dashboards";
import PatientDashboard from "./components/Banks/PatientDashboard";
import Navbar from "./components/Banks/Navbar";

import { useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import FooterComponent from "./components/Banks/FooterComponent";
import StemcellPage from "./components/Banks/StemcellPage";
import PatientPlans from "./components/Banks/PatientPlans";
import AllPatientsPage from "./components/Banks/AllPatientsPage";
import VerifierDashboard from "./components/Banks/VerifierDashboard";
import BankDashboard from "./components/Banks/BankDashboard";
import LoginPage from "./components/Banks/LoginPage";
import BankData from "./components/Banks/BankData";
import AllDonorsPage from "./components/Banks/AllDonorsPage";
import AllStemCellsPage from "./components/Banks/AllStemCellsPage";
import NeedyPatient from "./components/Banks/NeedyPatient";
import MyAppointments from "./components/Banks/MyAppointments";
import BookAppointment from "./components/Banks/BookAppointment";
import PageNotFound from "./components/Banks/PageNotFound";
import ViewPatient from "./components/Banks/ViewPatient";
import CreateFund from "./components/Banks/FundComponent/CreateFund";
import FundTabComponent from "./components/Banks/FundComponent/FundTabComponent";
import SingleFund from "./components/Banks/FundComponent/SingleFund";

import AllFundComponent from "./components/Banks/FundComponent/AllFundComponent";
import Blog from "./components/Blog/Blog";
import Addblog from "./components/Blog/Addblog";
import Readblog from "./components/Blog/Readblog";

const provider = new GoogleAuthProvider();
function App() {
	const navigate = useNavigate();
	const { state, dispatch } = useContext(EthContext);
	const signout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				dispatch({ type: "LOGOUT" });
				console.log("SIGN OUT SUCCESSFUL");
				//TODO UPDATE THE STATE VIA DISPATCH
			})
			.catch((error) => {
				// An error happened.
				console.log("error in app is", error);
			});
	};
	const login = async () => {
		dispatch({ type: "SET_LOADING" });
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// const token = credential.accessToken;
				// The signed-in user info.
				const { email, displayName, photoURL, HLA } = result.user;
				// console.log("user ", result.user);
				// console.log("email ", email);
				const uid = result.user.providerData[0].uid;
				// console.log("uid", uid);
				//TODO UPDATE STATE BY DISPATCHING A METHOD
				dispatch({
					type: "UPDATE",
					data: { uid },
				});
				// ...
				const docRef = doc(db, "Users", uid);
				try {
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						let data = docSnap.data();
						// console.log("docSnap.data() ", docSnap.data());
						let actualdata;
						// TODO UPDATE THE STATE WITH DATA OF FIREBASE !

						if (docSnap.data().type === "Donor") {
							actualdata = await getDoc(doc(db, "Donor", uid));
						} else if (docSnap.data().type === "Patient") {
							actualdata = await getDoc(doc(db, "Patients", uid));
						} else if (docSnap.data().type === "Bank") {
							actualdata = await getDoc(doc(db, "Bank", uid));
						} else {
							actualdata = data;
						}
						console.log("actualdata --> ", actualdata.data());
						dispatch({
							type: "UPDATE",
							data: { ...actualdata.data() },
						});

						console.log("updated state", state);
						navigate(`${data.type}/dashboard`);
					} else {
						// console.log("Document does not exist");

						navigate("/register");
					}
				} catch (error) {
					console.log("error in Home is ", error);
				}
			})
			.catch((error) => {
				// Handle Errors used.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});

		dispatch({ type: "UNSET_LOADING" });
	};
	return (
		<div className="">
			<Navbar login={login} logout={signout} />

<<<<<<< HEAD
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
				<Route exact path="/readblog" element={<Readblog />} />
				<Route exact path="/addblog" element={<Addblog />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/donor/register" element={<Home />} />
				<Route exact path="/patient/register" element={<Home />} />
				<Route
					exact
					path="/Donor/dashboard"
					element={
						<PatientDashboard />
						//  state.uid == null ? <Navigate to="/" /> :
					}
				/>
				<Route
					exact
					path="/Patient/dashboard"
					element={<NeedyPatient />}
				// state.uid == null ? <Navigate to="/" /> :
				/>
				<Route
					exact
					path="/Verifier/dashboard"
					element={<VerifierDashboard />}
				/>
				<Route exact path="/stem-cell-bank" element={<StemcellPage />} />
				<Route
					exact
					path="/my-plans/"
					element={<PatientPlans />}
				// state.uid == null ? <Navigate to="/" /> :
				/>
				{/* <Route exact path="/all-patients/" element={<AllPatientsPage />} /> */}
				<Route
					exact
					path="/Bank/dashboard/"
					element={
						state.uid == null ? (
							<Navigate to="/" />
						) : (
							<BankDashboard Component={BankData} />
						)
					}
				/>
				<Route
					exact
					path="/patients/"
					element={
						state.uid == null ? (
							<Navigate to="/" />
						) : (
							<BankDashboard Component={AllPatientsPage} />
						)
					}
				/>
				<Route
					exact
					path="/donors/"
					element={
						state.uid == null ? (
							<Navigate to="/" />
						) : (
							<BankDashboard Component={AllDonorsPage} />
						)
					}
				/>
				<Route
					exact
					path="/stemcells/"
					element={
						state.uid == null ? (
							<Navigate to="/" />
						) : (
							<BankDashboard Component={AllStemCellsPage} />
						)
					}
				/>
				<Route
					exact
					path="/create-fund/"
					element={<FundTabComponent />}
				// state.uid == null ? <Navigate to="/" /> :
				/>
				<Route
					exact
					path="/fund/:id"
					element={<SingleFund />}
				// state.uid == null ? <Navigate to="/" /> :
				/>
				<Route
					exact
					path="/plans/"
					element={<BankDashboard Component={AllStemCellsPage} />}
				/>
				<Route
					exact
					path="/my-appointments/"
					element={<MyAppointments Component={AllStemCellsPage} />}
				/>
				<Route
					exact
					path="/book-appointment/"
					element={<BookAppointment Component={AllStemCellsPage} />}
				/>
				<Route exact path="/Login/" element={<LoginPage />} />
				<Route
					exact
					path="/patient/:id"
					element={
						state.uid == null ? (
							<Navigate to="/" />
						) : (
							<BankDashboard Component={ViewPatient} />
						)
					}
				/>
				<Route exact path="*" element={<PageNotFound />} />
			</Routes>
			<FooterComponent />
		</div>
	);
=======
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/donor/register" element={<Home />} />
        <Route exact path="/patient/register" element={<Home />} />
        <Route
          exact
          path="/Donor/dashboard"
          element={
            <PatientDashboard />
            //  state.uid == null ? <Navigate to="/" /> :
          }
        />
        <Route
          exact
          path="/Patient/dashboard"
          element={<NeedyPatient />}
          // state.uid == null ? <Navigate to="/" /> :
        />
        <Route
          exact
          path="/Verifier/dashboard"
          element={<VerifierDashboard />}
        />
        <Route exact path="/stem-cell-bank" element={<StemcellPage />} />
        <Route
          exact
          path="/my-plans/"
          element={<PatientPlans />}
          // state.uid == null ? <Navigate to="/" /> :
        />
        {/* <Route exact path="/all-patients/" element={<AllPatientsPage />} /> */}
        <Route
          exact
          path="/Bank/dashboard/"
          element={
            state.uid == null ? (
              <Navigate to="/" />
            ) : (
              <BankDashboard Component={BankData} />
            )
          }
        />
        <Route
          exact
          path="/patients/"
          element={
            state.uid == null ? (
              <Navigate to="/" />
            ) : (
              <BankDashboard Component={AllPatientsPage} />
            )
          }
        />
        <Route
          exact
          path="/donors/"
          element={
            state.uid == null ? (
              <Navigate to="/" />
            ) : (
              <BankDashboard Component={AllDonorsPage} />
            )
          }
        />
        <Route
          exact
          path="/stemcells/"
          element={
            state.uid == null ? (
              <Navigate to="/" />
            ) : (
              <BankDashboard Component={AllStemCellsPage} />
            )
          }
        />
        <Route
          exact
          path="/create-fund/"
          element={<FundTabComponent />}
          // state.uid == null ? <Navigate to="/" /> :
        />{" "}
        <Route
          exact
          path="/all-funds/"
          element={<AllFundComponent />}
          // state.uid == null ? <Navigate to="/" /> :
        />
        <Route
          exact
          path="/fund/:id"
          element={<SingleFund />}
          // state.uid == null ? <Navigate to="/" /> :
        />
        <Route
          exact
          path="/plans/"
          element={<BankDashboard Component={AllStemCellsPage} />}
        />
        <Route
          exact
          path="/my-appointments/"
          element={<MyAppointments Component={AllStemCellsPage} />}
        />
        <Route
          exact
          path="/book-appointment/"
          element={<BookAppointment Component={AllStemCellsPage} />}
        />
        <Route exact path="/Login/" element={<LoginPage />} />
        <Route
          exact
          path="/patient/:id"
          element={
            state.uid == null ? (
              <Navigate to="/" />
            ) : (
              <BankDashboard Component={ViewPatient} />
            )
          }
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <FooterComponent />
    </div>
  );
>>>>>>> f33de512db88a2d94a25ec1ae226eccfd33dd7af
}

export default App;
