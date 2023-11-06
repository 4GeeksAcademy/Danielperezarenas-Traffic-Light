import React, { useState } from "react";

//include images into your bundle



//create your first component
const Home = () => {
	const [shine, setShine] = useState("red");
	const [displayPurple, setDisplayPurple] = useState("none")

	const shineRed = () => {
		if (shine === "red") {
			setShine("glow");
			setDisplayPurple("none");
		} else {
			setShine("red");
			setDisplayPurple("none");
		}
	}

	const shineYellow = () => {
		if (shine === "yellow") {
			setShine("glow");
			setDisplayPurple("none");
		} else {
			setShine("yellow");
			setDisplayPurple("none");
		}
	}

	const shineGreen = () => {
		if (shine === "green") {
			setShine("glow");
			setDisplayPurple("none");
		} else {
			setShine("green");
			setDisplayPurple("none");
		}
	}

	const changeColor = () => {
		if (shine === "red") {
			setShine("yellow");
		} else if (shine === "yellow") {
			setShine("green");
		} else {
			setShine("red");
		}
		setDisplayPurple("none");
	}

	const addPurple = () => {
			setDisplayPurple("block");
			setShine("purple");
	  }

	return (
		<div className="container-fluid text-center">
			<div className="container">
				<div className="traffic-light">
					<div className={"light red" + (shine === "red" ? " glow" : "")} onClick={shineRed}></div>
					<div className={"light yellow" + (shine === "yellow" ? " glow" : "")} onClick={shineYellow}></div>
					<div className={"light green" + (shine === "green" ? " glow" : "")} onClick={shineGreen}></div>
					<div className={"light purple " + (shine === "purple" ? "glow" : "")} style={{ display: displayPurple }} onClick={addPurple}></div>
				</div>
			</div>
			<button className="btn btn-primary m-4" onClick={changeColor}>Change</button>
			<button className="btn btn-success m-4" onClick={addPurple}>Añadir Púrpura</button>
		</div>
	);
};

export default Home;
