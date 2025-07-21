import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.min.css";
import Button from "@/shared/Buttons";

const MySwal = withReactContent(Swal);

function FormsComp() {
  const showError = () => {
    MySwal.fire({
      title: <p>Registration Status</p>,
      footer: "SweetAlert in React",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>Failed</p>);
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
      return MySwal.fire(<p>Sent</p>);
    });
  };

  // Keys for the first form
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

  // Keys for the second form
  const service_id2 = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY;
  const template_id2 = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY;
  const user_id2 = process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY;

  const [values, setValues] = useState({
    name: "",
    email: "",
    city: "",
    industry: "",
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
      city: values.city,
      industry: values.industry,
    };

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        setLoading(false);
        showSuccess();
        setValues({
          name: "",
          email: "",
          city: "",
          industry: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        showError();
      });
  };

  //logic to handle form 2 submission

  const [values2, setValues2] = useState({
    name: "",
    email: "",
    city: "",
    industry_of_expertise: "",
    topic_interest: "",
    org_name: "",
    org_title: "",
  });
  const [load, setLoad] = useState(false);

  const handleChange2 = (e) => {
    setValues2({ ...values2, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setLoad(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      city: values.city,
      industry: values.industry_of_expertise,
      topic_interest: values.topic_interest,
      org_name: values.org_name,
      org_title: values.org_title,
    };

    emailjs
      .send(service_id2, template_id2, templateParams, user_id2)
      .then((response) => {
        setLoading(false);
        showSuccess();
        setValues2({
          name: "",
          email: "",
          city: "",
          industry_of_expertise: "",
          topic_interest: "",
          org_name: "",
          org_title: "",
        });
      })
      .catch((error) => {
        setLoad(false);
        showError();
      });
  };

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-6 justify-center items-center lg:h-[500px]  mb-[5rem]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center   px-2   md:px-5 lg:px-[4rem]">
        {/* form-1 */}
        <section className="first-form-container  w-full h-[fixed] flex flex-col justify-start b  items-start p-2 gap-y-8  mb-auto ">
          <div className="flex flex-col gap-y-4 justify-center w-full   items-center  md:justify-start md:items-start    ">
            <h4 className="text-yellow-600 font-black font-ger text-xl  md:text-2xl text-center ">
              Register Now
            </h4>
            <p className="text-base font-sans font-bold text-gray-800 md:text-base  text-center ">
              Attend to Learn, Pitch or Invest
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" w-full grid grid-cols-1 gap-x-3  gap-y-4 md:grid-cols-2 justify-start items-start p-2  border border-gray-800 shadow-2xl rounded-md  bg-white "
          >
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="text"
              name="industry"
              value={values.industry}
              onChange={handleChange}
              placeholder="Industry"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <Button text="Submit" type="submit">
              {loading ? "please wait......" : "Submit"}
            </Button>
          </form>
        </section>

        {/* form-2 */}
        <section className="first-form-container   mt-[5rem]  w-full h-[fixed] flex flex-col justify-center    md:justify-start  md:items-start   items-center   p-2 gap-y-8">
          <div className="flex flex-col gap-y-4 justify-start items-center  md:ml-auto  md:justify-start md:items-start ">
            <h4 className="text-yellow-600 font-black font-ger text-xl  md:text-2xl  text-left ">
              Want to Speak?
            </h4>
            <p className="text-base font-sans font-bold text-gray-800 md:text-base  text-left ">
              Apply to be a speaker at TEES 2024
            </p>
          </div>

          <form
            onSubmit={handleSubmit2}
            className=" w-full grid grid-cols-1 gap-x-3  gap-y-4 md:grid-cols-2 justify-center items-start p-3  border border-gray-800 shadow-2xl rounded-md   bg-white "
          >
            <input
              type="text"
              name="name"
              value={values2.name}
              onChange={handleChange2}
              placeholder="Full Name"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="email"
              name="email"
              value={values2.email}
              onChange={handleChange2}
              placeholder="Email Address"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="text"
              name="city"
              value={values2.city}
              onChange={handleChange2}
              placeholder="City"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="text"
              name="industry_of_expertise"
              value={values.industry_of_expertise}
              onChange={handleChange2}
              placeholder="Industry of Expertise"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="text"
              name="topic_interest"
              value={values.topic_interest}
              onChange={handleChange2}
              placeholder="Topic of   Interest"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <input
              type="text"
              name="org_name"
              value={values.org_name}
              onChange={handleChange2}
              placeholder="Organization  Name"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />

            <input
              type="text"
              name="org_title"
              value={values.org_title}
              onChange={handleChange2}
              placeholder="Organization Title"
              className="w-full rounded-md p-3 px-2 text-gray-900 text-base font-sans  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
            />
            <Button text="Submit" type="submit" className="  md:w-full">
              {load ? "please wait......" : "Submit"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default FormsComp;
