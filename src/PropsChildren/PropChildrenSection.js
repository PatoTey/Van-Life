import React from "react";
/**import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"**/
import Avatar from "./AvatarChallenge/Avatar";
import uwu from "./AvatarChallenge/images/uwu.png"

function PropChildrenSection(){
    return (
        <div>
            <div>
            {/*<Button>Presiona</Button>
			<Button>👾👾</Button>
			<Button>
				<ul>
					<li>Hola</li>
					<li>Chao</li>
				</ul>
			</Button>
			<Button>
				<FaMoneyBill/>
				Buy now! 
			</Button>
            <Button style={{color: "green"}} onDoubleClick={()=>console.log("Double Clicked")} onClick={()=>console.log("Logging in...")} className={"hola"}>
                <FcGoogle />
                Log in With Google
            </Button>
            <Button size={"lg"} className={"hola"}>
                Click me xd
            </Button>
            <Button variant="success">
                Succes
            </Button>
            <Button variant="warning">
                Warning
            </Button>
            <Button variant="danger">
                Danger
            </Button>*/}
            </div>
            <Avatar src={uwu} alt="Poto" />
            <Avatar>PT</Avatar>
            <Avatar/>
        </div>
    )
}

export default PropChildrenSection