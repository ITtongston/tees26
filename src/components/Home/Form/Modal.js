import Button from "@/shared/Buttons";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.min.css";

const MySwal = withReactContent(Swal);

export default function Modal({ onClose }) {
  const showError = () => {
    MySwal.fire({
      title: <p>Registration Status</p>,
      footer: "SweetAlert in React",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(
        <p className="text-error text-sm">failed try again !</p>
      );
    });
  };

  const showSuccess = () => {
    MySwal.fire({
      title: <p>Success</p>,
      footer: "SweetAlert in React",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(
        <p className="text-success text-sm">message submitted </p>
      );
    });
  };

  // Keys for the first form
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        setLoading(false);
        showSuccess();
        setValues({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        showError();
      });
  };

  const handleClose = () => {
    onClose();
  };

  //function to close modal when you click on the body of the modal
  const modalRef = useRef(null);
  const clickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    {
      return () => document.removeEventListener("mousedown", clickOutside);
    }
  }, []);

  return (
    <div className="inset-0 fixed z-50  flex flex-col justify-center items-center px-2 bg-stone-800 bg-opacity-60 ">
      <div
        ref={modalRef}
        className="button-form-container  inset-0 relative w-full   h-[600px]  bg-white shadow-2xl   flex flex-col  z-50  p-2 "
      >
        <Button
          onClick={handleClose}
          className=  {` ml-auto mr-3 p-2 w-[40px] rounded-[50px] text-4xl 
`}          text="X"
        />

        <section
          data-aos="fade-up"
          data-aos-easing="ease-in linear"
          data-aos-mirror="true"
          className="form-container  md:hidden  w-full h-[fixed]  mt-[4rem] md:mt-0 px-2 "
        >
          <form
            onSubmit={handleSubmit}
            className=" w-full  md:w-[350px] grid grid-cols-1 gap-x-3  gap-y-4  justify-start items-start p-2  border border-gray-800 shadow-2xl   md:ml-auto bg-white bg-opacity-40  "
          >
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full  p-3 px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full  p-3 px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />

            <textarea
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full  p-3 h-[120px] px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            ></textarea>

            {/* <input
                type="date"
                name="industry"
                placeholder="Industry"
                className="w-full  p-3 px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
              /> */}
            <Button text="Submit" type="submit">
              {loading ? "Please Wait..." : "Submit"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
