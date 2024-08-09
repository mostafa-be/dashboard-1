import React from 'react'

type Props = {}

const BasicInfoAccount = (props: Props) => {
    const listYears = []
    for (let i = 1980; i < 2010; i++) {
        listYears.push(<option value={`${i}`}>{i}</option>)
    }
    return (
        <div
            id="basic-info"
            className="w-full bg-white rounded-[10px] shadow px-6 py-4 mt-6"
        >
            <h5 className="text-[20px] font-[600] text-gray-900">Basic Info</h5>
            <div className="w-full flex flex-wrap gap-y-3 items-center justify-between mt-3">
                <div className="w-full 800px:w-[48%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        First Name
                    </h6>
                    <input
                        type="text"
                        className="w-full outline-none p-2 bg-transparent  placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px]"
                        placeholder="Jhon"
                    />
                </div>
                <div className="w-full 800px:w-[48%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        Last Name
                    </h6>
                    <input
                        type="text"
                        className="w-full outline-none p-2 bg-transparent  placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px]"
                        placeholder="Doe"
                    />
                </div>
                <div className="w-full 800px:w-1/4">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        I'm
                    </h6>
                    <select className="appearance-none row-start-1 col-start-1 w-full outline-none placeholder-gray-500 p-2 bg-transparent border border-slate-200 rounded-lg mt-2 h-[40px] "
                        
                    >
                        <option value={"Choose"} selected disabled className="text-gray-500">Choose</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Male"}>Male</option>
                    </select>
                </div>
                <div className="w-full 800px:w-[70%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        Birth Date
                    </h6>
                    <div className="w-full flex items-center justify-between">
                        <select className="appearance-none row-start-1 col-start-1 placeholder-gray-500 w-1/4 outline-none p-2 bg-transparent border border-slate-200 rounded-lg mt-2 h-[40px] ">
                            <option value={"Month"} selected disabled className="text-gray-500">Month</option>
                            <option value={"January"}>January</option>
                            <option value={"February"}>February</option>
                            <option value={"March"}>March</option>
                            <option value={"April"}>April</option>
                            <option value={"May"}>May</option>
                            <option value={"June"}>June</option>
                            <option value={"July"}>July</option>
                            <option value={"August"}>August</option>
                            <option value={"September"}>September</option>
                            <option value={"October"}>October</option>
                            <option value={"November"}>November</option>
                            <option value={"December"}>December</option>
                        </select>
                        <select className="appearance-none row-start-1 col-start-1 w-1/4 outline-none p-2 bg-transparent placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px] ">
                            <option value={"Month"} selected disabled className="text-gray-500">Day</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                            <option value={"7"}>7</option>
                            <option value={"8"}>8</option>
                            <option value={"9"}>9</option>
                            <option value={"10"}>10</option>
                            <option value={"11"}>11</option>
                            <option value={"12"}>12</option>
                            <option value={"13"}>13</option>
                            <option value={"14"}>14</option>
                            <option value={"15"}>15</option>
                            <option value={"16"}>16</option>
                            <option value={"17"}>17</option>
                            <option value={"18"}>18</option>
                            <option value={"19"}>19</option>
                            <option value={"20"}>20</option>
                            <option value={"21"}>21</option>
                            <option value={"22"}>22</option>
                            <option value={"23"}>23</option>
                            <option value={"24"}>24</option>
                            <option value={"25"}>25</option>
                            <option value={"26"}>26</option>
                            <option value={"27"}>27</option>
                            <option value={"28"}>28</option>
                            <option value={"29"}>29</option>
                            <option value={"30"}>30</option>
                            <option value={"31"}>31</option>
                        </select>
                        <select className="appearance-none row-start-1 col-start-1 w-1/4 outline-none p-2 bg-transparent placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px] ">
                            <option value={"Month"} selected disabled className="text-gray-500">Year</option>
                                        
                            {
                                listYears
                            }
                                        
                        </select>
                    </div>
                </div>
                <div className="w-full 800px:w-[48%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        Email
                    </h6>
                    <input
                        type="text"
                        placeholder='Email'
                        className="w-full outline-none p-2 bg-transparent  placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px]"
                    />
                </div>
                <div className="w-full 800px:w-[48%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        Confirmation Email
                    </h6>
                    <input
                        type="text"
                        placeholder='Confirmation Email'
                        className="w-full outline-none p-2 bg-transparent  placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px]"
                    />
                </div>
                <div className="w-full 800px:w-[48%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        Your location
                    </h6>
                    <input
                        type="text"
                        placeholder='Moroco,casablanca,ain-diab'
                        className="w-full outline-none p-2 bg-transparent  placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px]"
                    />
                </div>
                <div className="w-full 800px:w-[48%]">
                    <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
                        Phone Number
                    </h6>
                    <input
                        type="tel"
                        placeholder='+21264563039620'
                        className="w-full outline-none p-2 bg-transparent  placeholder-gray-500 border border-slate-200 rounded-lg mt-2 h-[40px]"
                    />
                </div>
            </div>
            <div className="w-full flex items-center justify-end mb-3 mt-6">
                <div className="px-3 py-2 bg-gray-900  shadow rounded-[10px] flex items-center cursor-pointer">
                    <p className="text-[16px] font-[500] text-white">update</p>
                </div>
            </div>
        </div>
    );
}

export default BasicInfoAccount