import { useEffect, useState } from "react";
import axios from "axios";
import { getAdminToken } from "../../utils/adminAuth";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

type Stats = {
  totalLeads: number;
  pendingLeads: number;
  contactedLeads: number;
  convertedLeads: number;
  totalPrograms: number;
  totalTrainers: number;
  totalMessages: number;
};

export default function AdminDashboard() {
  const [data, setData] = useState<Stats | null>(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/overview", {
      headers: { Authorization: `Bearer ${getAdminToken()}` }
    })
    .then(res => setData(res.data))
    .catch(() => setData({
      totalLeads:0,pendingLeads:0,contactedLeads:0,convertedLeads:0,
      totalPrograms:0,totalMessages:0,totalTrainers:0
    }));
  }, []);

  if (!data) return <p className="text-gray-300">Loading stats...</p>;

  const chart = [
    { name:"Pending", value:data.pendingLeads },
    { name:"Contacted", value:data.contactedLeads },
    { name:"Converted", value:data.convertedLeads },
  ];

  return (
    <div className="p-6 space-y-10">

      <h1 className="text-4xl font-bold">
        Welcome Back <span className="text-yellow-400">Coach</span> 👋
      </h1>
      <p className="text-gray-400 -mt-2">
        Here's your Gym performance overview.
      </p>

      {/* ===== Stats Cards ===== */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card label="Total Leads" value={data.totalLeads}/>
        <Card label="Pending Leads" value={data.pendingLeads}/>
        <Card label="Contacted" value={data.contactedLeads}/>
        <Card label="Converted" value={data.convertedLeads}/>
      </div>

      {/* ===== Lead Funnel Chart ===== */}
      <div className="p-6 rounded-2xl bg-[#0c0c18] border border-gray-800">
        <h2 className="text-gray-300 mb-2">Lead Funnel</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <defs>
                <linearGradient id="y" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFD400" stopOpacity={0.9}/>
                  <stop offset="90%" stopColor="#FFD400" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#666"/>
              <YAxis stroke="#666"/>
              <Tooltip />
              <Area dataKey="value" stroke="#FFD400" fill="url(#y)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Gym Stats ===== */}
      <div className="grid grid-cols-3 gap-5 text-gray-300">
        <Mini label="Programs" value={data.totalPrograms}/>
        <Mini label="Trainers" value={data.totalTrainers}/>
        <Mini label="Messages" value={data.totalMessages}/>
      </div>

    </div>
  );
}

/******** COMPONENTS ********/
function Card({ label, value }: any) {
  return (
    <div className="bg-[#0c0c18] border border-gray-800 p-6 rounded-2xl">
      <p className="text-gray-400">{label}</p>
      <h1 className="text-3xl font-bold text-yellow-400 mt-2">{value}</h1>
    </div>
  );
}

function Mini({ label, value }: any) {
  return (
    <div className="text-sm flex justify-between border-b border-gray-800 pb-2">
      <span>{label}</span>
      <span className="text-yellow-400 font-semibold">{value}</span>
    </div>
  );
}
