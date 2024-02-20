import React from 'react'

function DonationsTable() {
  return (
    <div>
        

<div className="relative flex flex-col justify-center w-[70vw]  overflow-x-auto">
    <table className="w-full ml-[2rem] mt-[5rem]   m-auto text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-[1rem] text-gray-700 uppercase bg-orange-50 ">
            <tr>
                <th scope="col" className="px-10 py-6">
                    Product name
                </th>
                <th scope="col" className="px-10 py-6">
                    Color
                </th>
                <th scope="col" className="px-10 py-6">
                    Category
                </th>
                <th scope="col" className="px-10 py-6">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-10 py-6 text-[1rem] font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-10 text-[1rem] py-6">
                    Silver
                </td>
                <td className="px-10 text-[1rem] py-6">
                    Laptop
                </td>
                <td className="px-10 text-[1rem] py-6">
                    $2999
                </td>
            </tr>
            <tr className="bg-white text-[1rem] border-b ">
                <th scope="row" className="px-10 py-6 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-10 py-6">
                    White
                </td>
                <td className="px-10 py-6">
                    Laptop PC
                </td>
                <td className="px-10 py-6">
                    $1999
                </td>
            </tr>
            <tr className="bg-white text-[1rem] ">
                <th scope="row" className="px-10 py-6 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-10 py-6">
                    Black
                </td>
                <td className="px-10 py-6">
                    Accessories
                </td>
                <td className="px-10 py-6">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default DonationsTable