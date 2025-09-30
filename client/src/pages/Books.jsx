// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import API_BASE_URL from "./config";

// const Books = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}/books`);
//         setBooks(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   console.log(books);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/books/${id}`);
//       window.location.reload()
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h1>~~ MultiCloud with DevOps Training by VEERA Nareshit 6 months </h1>
//       <div className="books">
//         {books.map((book) => (
//           <div key={book.id} className="book">
//             <img src={book.cover} alt="" />
//             <h2>{book.title}</h2>
//             <p>{book.desc}</p>
//             <span>${book.price}</span>
//             <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
//             <button className="update">
//               <Link
//                 to={`/update/${book.id}`}
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 Update
//               </Link>
//             </button>
//           </div>
//         ))}
//       </div>

//       <button className="addHome">
//         <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
//           AddingNewNook
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default Books;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_BASE_URL from "./config";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/books`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1a202c", marginBottom: "40px" }}>
        📚 MultiCloud DevOps Training by VEERA Naresh – 6 Months
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={book.cover}
              alt={book.title}
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h2 style={{ fontSize: "18px", margin: "10px 0", color: "#2d3748" }}>
              {book.title}
            </h2>
            <p style={{ fontSize: "14px", color: "#4a5568", height: "50px", overflow: "hidden" }}>
              {book.desc}
            </p>
            <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>${book.price}</span>
            <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => handleDelete(book.id)}
                style={{
                  backgroundColor: "#e53e3e",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
              <Link
                to={`/update/${book.id}`}
                style={{
                  backgroundColor: "#3182ce",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link
          to="/add"
          style={{
            backgroundColor: "#38a169",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Add New Book
        </Link>
      </div>
    </div>
  );
};

export default Books;
