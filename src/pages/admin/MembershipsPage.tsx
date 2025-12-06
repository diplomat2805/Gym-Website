import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAdminToken } from "../../utils/adminAuth";

type Lead = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  age: number;
  fitnessGoal: string;
  trainingTime: string;
  status: string;
  createdAt: string;
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700 border-yellow-400",
  contacted: "bg-blue-100 text-blue-700 border-blue-400",
  converted: "bg-green-100 text-green-700 border-green-400",
  lost: "bg-red-100 text-red-700 border-red-400",
};

export default function MembershipsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchLeads = () => {
    axios
      .get("http://localhost:5000/api/admin/memberships", {
        headers: { Authorization: `Bearer ${getAdminToken()}` },
      })
      .then(res => setLeads(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await axios.patch(
      `http://localhost:5000/api/admin/memberships/${id}/status`,
      { status },
      { headers: { Authorization: `Bearer ${getAdminToken()}` } }
    );
    fetchLeads();
  };

  return (
    <AdminLayout>
      <div className="px-4 md:px-10 py-8">

        <h1 className="text-3xl font-bold text-[#111] mb-6">Membership Leads</h1>

        <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600 border-b">
              <tr>
                <th className="px-5 py-3 text-left">Name</th>
                <th className="px-5 py-3 text-left">Phone</th>
                <th className="px-5 py-3 text-left">Goal</th>
                <th className="px-5 py-3 text-left">Preferred Time</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-left">Created</th>
                <th className="px-5 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {leads.length > 0 ? (
                leads.map(lead => (
                  <tr
                    key={lead._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-5 py-4 font-medium text-gray-900">
                      <div>{lead.fullName}</div>
                      <div className="text-xs text-gray-500">{lead.email}</div>
                    </td>

                    <td className="px-5 py-4 text-gray-700">{lead.phone}</td>
                    <td className="px-5 py-4 text-gray-700">{lead.fitnessGoal}</td>
                    <td className="px-5 py-4 text-gray-700">{lead.trainingTime}</td>

                    <td className="px-5 py-4">
                      <span
                        className={`px-3 py-1 border text-xs font-medium rounded-full ${
                          statusColors[lead.status] || "bg-gray-200 text-gray-700 border-gray-400"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-gray-600 text-xs">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4 flex gap-2 justify-center">

                      <button
                        onClick={() => updateStatus(lead._id, "contacted")}
                        className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition"
                      >
                        Contacted
                      </button>

                      <button
                        onClick={() => updateStatus(lead._id, "converted")}
                        className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition"
                      >
                        Converted
                      </button>

                      <button
                        onClick={() => updateStatus(lead._id, "lost")}
                        className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition"
                      >
                        Lost
                      </button>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-14 text-center text-gray-500">
                    No membership leads yet. Once users submit the **Join Now** form,
                    they will appear here.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
