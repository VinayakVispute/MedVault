import React, { useState, useEffect } from "react";
import axios from "axios";

import PatientList from "../patient/PatientList";
import { Link } from "react-router-dom";
import DoctorList from "../Doctor/DoctorList";
import patientListImg from "../../assets/img/dashboard/patient_list.png";
import doctorListImg from "../../assets/img/dashboard/doctor_list.png";
import Statscard from "../comp/cards/Statscard";
import Dropbox from "../comp/Dropbox";
import PatientChart from "../comp/PatientChart";

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("patient");
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/getadmin"
        );
        console.log(response.data);
        setAdmin(response.data);
      } catch (error) {
        console.error("Error fetching admin", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-12 bg-gray-100 font-poppins">
      {/* <div className="fixed border-0 rounded-xl ml-2 my-2 w-14 transition duration-800 bg-white h-full">
        <div className="flex flex-col justify-center items-center font-bold font-poppins my-4 h-full">
          <button
            onClick={() => handleOptionChange("patient")}
            className="text-gray-400 mt-1 border-0 rounded-xl my-2"
          >
            <div className="w-10 bg-white  hover:bg-gray-100 p-2 border-0 rounded-lg">
              <img src={patientListImg} alt="patient-list" />
            </div>
          </button>
          <button
            onClick={() => handleOptionChange("doctor")}
            className="text-gray-400 border-0 rounded-xl my-2"
          >
            <div className="w-10 bg-white  hover:bg-gray-100  p-2 border-0 rounded-lg">
              <img src={doctorListImg} alt="doctor-list" />
            </div>
          </button>
        </div>
      </div> */}
      <div className="flex text-black bg-gray-100 pl-24 max-w-lg">
        <div className="min-h-screen  transition duration-800 px-2 lg:px-16 pt-24">
          <h1 className=" text-3xl font-semibold p-2">Welcome</h1>
          <div className="flex gap-3 py-8">
            <Statscard title="Total" patients="293" />
            <Statscard title="Neurology" patients="49" />
            <Statscard title="Cardiology" patients="28" />
            <Statscard title="Pediatrics" patients="104" />
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-xl font-semibold p-2 text-gray-600">
                Numbers
              </h1>
              <Dropbox />
            </div>
            <div className="flex bg-white p-5 my-2 border-0 rounded-lg">
              <div>
                <h4 className="text-gray-600 font-semibold text-sm">
                  TOTAL PATIENTS PER DAY
                </h4>

                <div className="pt-8">
                  <h5 className="text-gray-500 text-xs">Average</h5>
                  <h1 className="text-3xl font-semibold ">405.97</h1>
                </div>

                <div className="flex py-8">
                  <div className="pr-2 border-0 border-r-2">
                    <h5 className="text-gray-500 text-xs">Admitted</h5>
                    <h1 className="text-xl font-semibold ">290</h1>
                  </div>
                  <div className="pl-2">
                    <h5 className="text-gray-500 text-xs">Discharged</h5>
                    <h1 className="text-xl font-semibold ">115</h1>
                  </div>
                </div>
                <a
                  href=""
                  className="py-2 px-20 border-0 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black font-semibold"
                >
                  STATS
                </a>
              </div>
              <PatientChart />
            </div>
          </div>
          <PatientList />
        </div>
        <DoctorList />
      </div>
    </div>
  );
};

export default AdminDashboard;
