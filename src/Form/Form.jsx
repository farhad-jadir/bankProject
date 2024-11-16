import { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({
        name:"",
        email:""
    });
    const [submittedData, setSubmittedData] = useState({
        name:"",
        email: ""
    });
    const handleChange =(e)=> {
        const {name, value} = e.target; 
        setFormData((preData)=>({
            ...preData,
            [name]:value
        }))

    };
    const HandleSubmit =(event)=>{
        event.preventDefault();
        setSubmittedData(formData)
    }
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
                <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">Login Form</h1>
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <label className="block text-gray-950 text-sm">Name:</label>
                            <input onChange={handleChange} type="text" placeholder="Input Your Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"name="name" value={formData.name} />
                        </div>
                        <div className="mt-2">
                            <label className="block text-gray-950 text-sm">Email:</label>
                            <input onChange={handleChange} type="email" placeholder="Input Your Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"name="email" value={formData.email} />
                        </div>
                        <div className="mt-2">
                            <label className="block text-gray-950 text-sm">Password:</label>
                            <input type="password" placeholder="Input Your Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-500 text-white p-2 mt-2 rounded-md">Login</button>
                        <div>
                            <h2 className="text-center mt-5 font-semibold">Usert Information</h2>
                            <p className="text-gray-800">Name:{submittedData.name}</p>
                            <p className="text-gray-800">Email:{submittedData.email}</p>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
export default Form;