"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DashboardPage() {
  const [leads, setLeads] = useState<any[]>([])

  async function fetchLeads() {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })

    setLeads(data || [])
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  async function updateStatus(id: string, status: string) {
    await fetch("/api/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    })

    fetchLeads()
  }

  const totalLeads = leads.length

  const totalRevenue = leads.reduce((acc, lead) => {
    return acc + Number(lead.budget || 0)
  }, 0)

  const today = new Date().toDateString()

  const todayLeads = leads.filter(
    (lead) =>
      new Date(lead.created_at).toDateString() === today
  ).length

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-slate-900 mb-3">
          Leads Dashboard
        </h1>

        <p className="text-2xl text-slate-600 mb-12">
          Manage all incoming inquiries
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <p className="text-slate-500 text-2xl mb-4">
              Total Leads
            </p>

            <h2 className="text-6xl font-bold text-slate-900">
              {totalLeads}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <p className="text-slate-500 text-2xl mb-4">
              Revenue Potential
            </p>

            <h2 className="text-6xl font-bold text-emerald-600">
              ${totalRevenue.toLocaleString()}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <p className="text-slate-500 text-2xl mb-4">
              New Leads Today
            </p>

            <h2 className="text-6xl font-bold text-blue-600">
              {todayLeads}
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">
          <table className="w-full">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="text-left p-6 text-xl">Name</th>
                <th className="text-left p-6 text-xl">Email</th>
                <th className="text-left p-6 text-xl">Company</th>
                <th className="text-left p-6 text-xl">Budget</th>
                <th className="text-left p-6 text-xl">Message</th>
                <th className="text-left p-6 text-xl">Status</th>
                <th className="text-left p-6 text-xl">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-slate-200"
                >
                  <td className="p-6 text-lg">{lead.name}</td>

                  <td className="p-6 text-lg">
                    {lead.email}
                  </td>

                  <td className="p-6 text-lg">
                    {lead.company}
                  </td>

                  <td className="p-6 text-lg font-semibold text-emerald-600">
                    ${lead.budget}
                  </td>

                  <td className="p-6 text-lg">
                    {lead.message}
                  </td>

                  <td className="p-6">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {lead.status || "New"}
                    </span>
                  </td>

                  <td className="p-6">
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() =>
                          updateStatus(
                            lead.id,
                            "Contacted"
                          )
                        }
                        className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm"
                      >
                        Contacted
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            lead.id,
                            "Qualified"
                          )
                        }
                        className="bg-amber-500 text-white px-3 py-2 rounded-lg text-sm"
                      >
                        Qualified
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            lead.id,
                            "Closed"
                          )
                        }
                        className="bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm"
                      >
                        Closed
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}