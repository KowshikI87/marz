import React from "react";
import PageWrapper from '../PageWrapper';

const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
 let content = 
 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
                 <th scope="col" className="px-6 py-3">
                     <span className="sr-only">Image</span>
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Product
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Qty
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Price
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Action
                 </th>
             </tr>
         </thead>
         <tbody>
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 <td className="w-32 p-4">
                     <img src="https://assets.shop.loblaws.ca/products/20313741003/b1/en/angle/20313741003_angle_a01_@2.png" alt="Coke" />
                 </td>
                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     Coke
                 </td>
                 <td className="px-6 py-4">
                     <div className="flex items-center space-x-3">
                         <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                             <span className="sr-only">Quantity button</span>
                             <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                         </button>
                         <div>
                             <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                         </div>
                         <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                             <span className="sr-only">Quantity button</span>
                             <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                         </button>
                     </div>
                 </td>
                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     $599
                 </td>
                 <td className="px-6 py-4">
                     <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                 </td>
             </tr>
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 <td className="w-32 p-4">
                     <img src="https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg" alt="Ice Cream"/>
                 </td>
                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     Ice Cream
                 </td>
                 <td className="px-6 py-4">
                     <div className="flex items-center space-x-3">
                         <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                             <span className="sr-only">Quantity button</span>
                             <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                         </button>
                         <div>
                             <input type="number" id="second_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                         </div>
                         <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                             <span className="sr-only">Quantity button</span>
                             <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                         </button>
                     </div>
                 </td>
                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     $2499
                 </td>
                 <td className="px-6 py-4">
                     <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                 </td>
             </tr>
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 <td className="w-32 p-4">
                     <img src="https://hips.hearstapps.com/hmg-prod/images/spiced-up-potato-chips-1601911089.jpg?crop=1.00xw:0.668xh;0,0.0987xh&resize=1200:*" alt="Chips"/>
                 </td>
                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     Chips
                 </td>
                 <td className="px-6 py-4">
                     <div className="flex items-center space-x-3">
                         <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                             <span className="sr-only">Quantity button</span>
                             <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                         </button>
                         <div>
                             <input type="number" id="third_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                         </div>
                         <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                             <span className="sr-only">Quantity button</span>
                             <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                         </button>
                     </div>
                 </td>
                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     $999
                 </td>
                 <td className="px-6 py-4">
                     <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                 </td>
             </tr>
         </tbody>
     </table>
 </div>
 

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white">
        {content}
      </h1>
    </PageWrapper>
  );
};

export default ProductsPage
