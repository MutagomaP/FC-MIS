import React from 'react'
import GlobalHeader from '../dashboard/GlobalHeader.jsx'

const clubs = [
  {
    id: 1,
    name: "Manchester United FC",
    president: "John Smith",
    email: "john.smith@manutd.com",
    members: 1500,
    dateJoined: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Arsenal FC",
    president: "Sarah Johnson",
    email: "sarah.j@arsenal.com",
    members: 1200,
    dateJoined: "2024-01-20",
    status: "Active"
  },
  {
    id: 3,
    name: "Liverpool FC",
    president: "Michael Brown",
    email: "m.brown@liverpool.com",
    members: 1350,
    dateJoined: "2024-02-01",
    status: "Active"
  },
]

function ClubsDash() {
  return (
    <div className='pl-2 bg-[#F5F5F5]'>
      <GlobalHeader />
      <div className="p-4">
        <ClubsDashboard />
      </div>
    </div>
  )
}

export const ClubsDashboard = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-blue-100 text-gray-700 text-left">
            <th className="py-2 px-4 border-b first:rounded-tl-xl">#</th>
            <th className="py-2 px-4 border-b">Football Clubs</th>
            <th className="py-2 px-4 border-b">Club President</th>
            <th className="py-2 px-4 border-b">E-mail</th>
            <th className="py-2 px-4 border-b">Members</th>
            <th className="py-2 px-4 border-b">Date Joined</th>
            <th className="py-2 px-4 border-b">Action</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b last:rounded-tr-xl text-red-600">Disable</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club, index) => (
            <tr 
              key={club.id} 
              className={`hover:bg-gray-100 ${
                index % 2 === 0 
                ? 'bg-[#2057A5]/5' 
                : 'bg-[#838383]/5'
              }`}
            >
              <td className="py-2 px-4 border-b">{club.id}</td>
              <td className="py-2 px-4 border-b">{club.name}</td>
              <td className="py-2 px-4 border-b">{club.president}</td>
              <td className="py-2 px-4 border-b">{club.email}</td>
              <td className="py-2 px-4 border-b">{club.members}</td>
              <td className="py-2 px-4 border-b">{club.dateJoined}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="bg-red-500 text-white px-3 py-1 rounded">Disable</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubsDash;
