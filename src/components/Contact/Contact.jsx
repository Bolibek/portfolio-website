import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

function Contact() {
	const [comment, setComment] = useState("");
	const [state, handleSubmit] = useForm("xlevpokd");
	if (state.succeeded) {
		return <p className="h-[40rem] flex justify-center items-center text-5xl">Thanks for joining!</p>;
	}
	return (
		<section id="contact" className="my-5 flex flex-row mx-auto justify-center">
			<div className="col s12 m6 mr-7 w-[40rem]">
				<div className="card-panel indigo lighten-5 p-10">
					<div className="row no-margin">
						<div className="col s12 text-3xl font-md h-4">
							<h5>Contact Me via this form</h5>
						</div>
					</div>
					<div className="row no-margin">
						<form
							onSubmit={handleSubmit}
							className="col s12 no-padding h-[20rem]"
						>
							<div className="row no-margin h-0">
								<div className="input-field col s12">
									<i className="material-icons prefix">account_circle</i>
									<input
										id="name"
										type="text"
										className="validate"
										name="name"
									/>
									<label htmlFor="name">First Name</label>
								</div>
							</div>
							<div className="row no-margin h-0">
								<div className="input-field col s12">
									<i className="material-icons prefix">mail</i>
									<input
										id="email"
										type="email"
										className="validate"
										name="_replyto"
									/>
									<label htmlFor="email">Email</label>
									<ValidationError
										prefix="Email"
										field="email"
										errors={state.errors}
									/>
								</div>
							</div>
							<div className="row no-margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">comment</i>
									<textarea
										id="comment"
										type="text"
										className="materialize-textarea validate"
										name="comment"
										data-length="500"
									></textarea>
									<label htmlFor="comment">Comment</label>
									<ValidationError
										prefix="Message"
										field="message"
										errors={state.errors}
									/>
								</div>
							</div>
							<div className="row no-margin mx-[-3]">
								<div className="col s12 right-align">
									<button
										className="btn waves-effect waves-light black"
										type="submit"
										name="action"
										disabled={state.submitting}
									>
										<strong>Submit</strong>
										<i className="material-icons right">send</i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="card-panel black darken-4 white-text center h-56 w-[35rem]">
				<i className="material-icons large">email</i>
				<h5 className=" text-3xl my-2">Or you can email me directly at:</h5>
				<h6 className=" text-xl semi-bold">mr.fayzullayevbolibek@gmail.com</h6>
			</div>
		</section>
	);
}

export default Contact;
