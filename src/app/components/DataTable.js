// components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.title}>
              <td className="py-2 px-4 border-b">{item.title}</td>
              <td className="py-2 px-4 border-b">
                <img src={item.imageUrl} alt={item.title} className="h-10 w-10 object-cover rounded-full" />
              </td>
              <td className="py-2 px-4 border-b">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
