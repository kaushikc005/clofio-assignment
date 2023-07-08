import React from "react";

const Table = ({ columns, data,buttons }) => {
  console.log(columns)

  const tableData = data.map((item) => Object.values(item));
  console.log(tableData);
  return (
    <table className="m-4 xs:text-[10px] md:text-sm ">
      <thead className=" border-t-2 border-b-2 flex xs:gap-2 md:gap-8 items-center justify-start">
        {columns.map((item, index) => (
          <td className={buttons?'md:w-40':'md:w-56'} key={index}>{item}</td>
        ))}
      </thead>
      <tbody className={` mt-2`}>
        {tableData.map((item, key) => (
          <tr key={key} className="flex md:gap-8 mt-2">
            {item.map((td) => (
              <td className={buttons?'md:w-40':'md:w-56'}>{td}</td>
            ))}
            
          </tr>
        ))}
        {buttons &&
            <div className="flex gap-2 mt-2">
                
                <button className="border-2 border-gray-500 p-1 rounded-md">Approve</button>
                <button className="border-2 border-gray-500 p-1 rounded-md">Reject</button> 
            </div>

            }
      </tbody>
    </table>
  );
};

export default Table;
