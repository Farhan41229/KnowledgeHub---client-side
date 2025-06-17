import React, { useState } from 'react';

const PostArticle = () => {
  // Define the state for each form field with capitalized keys
  const [formData, setFormData] = useState({
    Title: '',
    Content: '',
    Category: '',
    CategoryId: 3, // This will be set manually
    Tags: ['', '', ''],
    ThumbnailImage: '',
    Date: '',
    UserInfo: {
      Email: '',
      Username: '',
    },
  });

  // List of categories for the dropdown (You can replace these with your actual categories)
  const categories = [
    'Technology',
    'Education',
    'Health & Wellness',
    'Science',
    'Business',
    'Entertainment',
    'Sports',
  ];

  // Handle input changes for non-userInfo fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle tag changes (3 tags)
  const handleTagChange = (index, value) => {
    const newTags = [...formData.Tags];
    newTags[index] = value;
    setFormData({ ...formData, Tags: newTags });
  };

  // Handle changes to userInfo fields
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    const [key, subKey] = name.split('.'); // Split name by dot for nested object fields
    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        [subKey]: value, // Update the nested property
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // You can handle form submission, such as sending data to a server here
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Post a New Article
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label
            htmlFor="Title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="Title"
            name="Title"
            value={formData.Title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter article title"
            required
          />
        </div>

        {/* Content Input */}
        <div>
          <label
            htmlFor="Content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="Content"
            name="Content"
            value={formData.Content}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter article content"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label
            htmlFor="Category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="Category"
            name="Category"
            value={formData.Category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Tags Input */}
        <div>
          <label
            htmlFor="Tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags
          </label>
          <div className="flex space-x-4">
            {[0, 1, 2].map((index) => (
              <input
                key={index}
                type="text"
                value={formData.Tags[index]}
                onChange={(e) => handleTagChange(index, e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder={`Tag ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Image URL Input */}
        <div>
          <label
            htmlFor="ThumbnailImage"
            className="block text-sm font-medium text-gray-700"
          >
            Thumbnail Image URL
          </label>
          <input
            type="url"
            id="ThumbnailImage"
            name="ThumbnailImage"
            value={formData.ThumbnailImage}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter thumbnail image URL"
            required
          />
        </div>

        {/* Date Input */}
        <div>
          <label
            htmlFor="Date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="Date"
            name="Date"
            value={formData.Date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Username Input */}
        <div>
          <label
            htmlFor="Username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="Username"
            name="UserInfo.Username"
            value={formData.UserInfo.Username}
            onChange={handleUserInfoChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* User Email Input */}
        <div>
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700"
          >
            User Email
          </label>
          <input
            type="email"
            id="Email"
            name="UserInfo.Email" // Changed here for correct handling
            value={formData.UserInfo.Email}
            onChange={handleUserInfoChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostArticle;
