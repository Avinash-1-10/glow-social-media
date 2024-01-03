import React from "react";
// import "./Requests.css"; // Import the external CSS file

const Requests = () => {
  const friendRequests = [
    {
      id: 1,
      username: "John Doe",
      profileImage: "https://i.pinimg.com/originals/fc/36/1a/fc361ab6c1ec3ebbfbd9fbd057b6f07a.jpg",
      followers: "22k"
    },
    {
      id: 2,
      username: "Jane Smith",
      profileImage: "https://i.pinimg.com/originals/31/e0/39/31e039014c228d478bb063c1046849e1.jpg",
      followers: "12k"
    },
    // Add more friend request objects as needed
  ];

  return (
    <div className=" m-2 mt-8 ">
      <h2 className="text-2xl font-semibold mb-4">Friend Requests</h2>
      <ul className="space-y-4">
        {friendRequests.map((request) => (
          <li key={request.id} className="flex items-center space-x-4 justify-between bg-slate-100 p-2 rounded-lg">
            <div className="flex gap-3">
            <img
              src={request.profileImage}
              alt={`${request.username}'s Profile`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{request.username}</p>
              <p className="text-gray-500">{request.followers} Followers</p>
            </div>
            </div>
 

            {/* Accept and Reject Options */}
            <div className="ml-auto flex items-center justify-between gap-2">
              <button className="bg-green-500 text-white  px-2 py-1  rounded-md hover:bg-green-600">
                Accept
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requests;
