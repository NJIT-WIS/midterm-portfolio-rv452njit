"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
// const [isFormValid, setIsFormValid] = useState(false); 

var disableButton = true;
export function PopModal() {
  const [errors, setErrors] = useState({});

  const [state, setState] = useState(false);

  const [formData, setFormData] = useState({
    clientType: '',
    email: '',
    subject: '',
    message:''
  });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const HandleOnClick = (event: any) => {
   
  }

  return (
    <div style={{ width: "30vw", height: "30vw", maxHeight:"40vw", display: "flex", alignSelf: "center", margin: "10%" }}>
      <div className="">
        {/* (disableButton==true)? disabled : '' */}
        <div className=" z-100 inset-0 overflow-y-auto"
          id="Feedback-modal"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true">
          <form className="rounded-lg shadow-m flex flex-col bg-gray dark:bg-gray-500" style={{ padding: "2vw", width: "50%", margin: "15px", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>

            <h1 className="text-2xl font-bold dark:text-gray-50" style={{ display: "flex", justifyContent:"center" }}><span style={{ color: "Blue" }}>A</span>sk Me Anyth<span style={{ color: "Blue" }}>I</span>ng</h1>
            <div className="control-setting">
              <label htmlFor="clientType" style={{color:"white"}}>Select </label>

              <select required name="clientType" id="clientType" onChange={handleInputChange} value={formData.clientType}>
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
              </select>
            </div>

            <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-white-500">*</span></label>
            <input required onChange={handleInputChange} value={formData.email} type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white-500" />

            <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-white-500">*</span></label>
            <input required onChange={handleInputChange} value={formData.subject} type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white-500" />

            <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-white-500">*</span></label>
            <textarea required onChange={handleInputChange} value={formData.message} cols={4} name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white-500"></textarea>
            
            <span>*All Fields are Mandatory</span>
            <div className="flex flex-row items-center justify-start">
              {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"> */}
                <Link
                href="/"
                  type="button"
                  onClick={()=>HandleOnClick(event)}
                  className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  SUBMIT
                </Link>

                <Link
                 href={"/"}
                  type="button"
                  onClick={(event) => { HandleOnClick(event)}}
                  className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  CANCEL
                </Link>
              {/* </div> */}
            </div>

          </form>
        </div>
      </div>
    </div>

  );
}
