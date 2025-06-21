import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../Auths/AuthContext';

const PostArticle = () => {
  const { DBuser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: ['', '', ''],
    author_name: '',
    author_email: '',
    thumbnail_image: '',
  });

  // Prefill author info and thumbnail when DBuser is available
  useEffect(() => {
    if (DBuser) {
      setFormData((prev) => ({
        ...prev,
        author_name: DBuser.username || DBuser.name || '',
        author_email: DBuser.email || '',
        thumbnail_image:
          DBuser.photoURL ||
          'https://i.ibb.co/fVvYk8g4/pexels-vlada-karpovich-4050347.jpg',
      }));
    }
  }, [DBuser]);

  const categories = [
    'Technology',
    'Education',
    'Health & Wellness',
    'Science',
    'Business',
    'Entertainment',
    'Sports',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData((prev) => ({ ...prev, tags: newTags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      date: new Date().toISOString().split('T')[0], // add today's date
    };

    try {
      const res = await fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        Swal.fire({ title: 'Article posted!', icon: 'success' });
        // Optionally reset the form here
      }
    } catch (err) {
      Swal.fire({ title: 'Error', text: err.message, icon: 'error' });
    }
  };

  if (!DBuser) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Post a New Article
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter article title"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Write your article here..."
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium">Tags</label>
          <div className="flex space-x-4">
            {[0, 1, 2].map((i) => (
              <input
                key={i}
                type="text"
                value={formData.tags[i]}
                onChange={(e) => handleTagChange(i, e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder={`Tag ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Author Name */}
        <div>
          <label htmlFor="author_name" className="block text-sm font-medium">
            Author Name
          </label>
          <input
            id="author_name"
            name="author_name"
            value={formData.author_name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Author Email */}
        <div>
          <label htmlFor="author_email" className="block text-sm font-medium">
            Author Email
          </label>
          <input
            id="author_email"
            name="author_email"
            type="email"
            value={formData.author_email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Thumbnail Image URL */}
        <div>
          <label
            htmlFor="thumbnail_image"
            className="block text-sm font-medium"
          >
            Thumbnail Image URL
          </label>
          <input
            id="thumbnail_image"
            name="thumbnail_image"
            type="url"
            value={formData.thumbnail_image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
          >
            Post Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostArticle;
