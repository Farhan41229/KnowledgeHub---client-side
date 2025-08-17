import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auths/AuthContext';
import { useLoaderData } from 'react-router';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyArticles = () => {
  const HandleDeleteListing = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete Listing from MongoDB
        fetch(`https://knowledge-hub-server-gules.vercel.app/articles/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const newfilters = myarticles.filter(
                (article) => article._id != id
              );
              setmyarticles(newfilters);
            }
          });
      }
    });
  };

  const { user } = useContext(AuthContext);
  const [myarticles, setmyarticles] = useState([]);
  const data = useLoaderData();
  //   console.log(user);
  // console.log(data);
  useEffect(() => {
    if (Array.isArray(data) && user != null) {
      const filteredartilces = data.filter(
        (article) => article.author_email == user.email
      );
      setmyarticles(filteredartilces);
    }
  }, [data]);
  //   console.log(myarticles);
  return (
    <div className="my-10 space-y-10 px-10">
      <h1 className="text-8xl text-center font-extrabold ">
        These are my Articles
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Article Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myarticles.map((article, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{article.title}</td>
                <td className="">
                  <div className="bg-yellow-400 w-1/4 p-2  text-white">
                    <FaPen className="" size={20} />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => HandleDeleteListing(article._id)}
                    className="bg-red-400 w-1/4 p-2  text-white hover:cursor-pointer"
                  >
                    <FaTrash className="" size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArticles;
