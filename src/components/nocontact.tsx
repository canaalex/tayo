import React from "react";

const NoContact= () => {
  return (
    <div className="w-full py-10 bg-gray-100">
    <div className="container mx-auto flex justify-center items-center px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          No Contacts Found
        </h2>
        <p className="text-lg text-gray-500">
          It looks like you haven't added any contacts yet. Start by creating a new contact to manage your connections.
        </p>
      </div>
    </div>
  </div>
  );
};

export default NoContact;