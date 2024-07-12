import React, { useState } from "react";
import axios from "axios";
import './Find.css'
function Find() {
  const [formData, setFormData] = useState({
    companyname: "",
    categories: "",
    topprice: "",
    minprice: "",
    maxprice: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(
        `http://20.244.56.144/test/companies/${formData.companyname}/categories/${formData.categories}/products?top=${formData.topprice}&minPrice=${formData.minprice}&maxPrice=${formData.maxprice}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzc2OTc0LCJpYXQiOjE3MjA3NzY2NzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZDdkYzkzLThiNDEtNGRhZS1iYTM5LTQ1NWY0YWFiYWMwYyIsInN1YiI6InZpa3NoLmdhbF9jczIxQGdsYS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IkdMQSBVbml2ZXJpc3R5IiwiY2xpZW50SUQiOiI4N2Q3ZGM5My04YjQxLTRkYWUtYmEzOS00NTVmNGFhYmFjMGMiLCJjbGllbnRTZWNyZXQiOiJSSm5Na1h3UWRTdVVsY0p3Iiwib3duZXJOYW1lIjoidmlrYXNoIiwib3duZXJFbWFpbCI6InZpa3NoLmdhbF9jczIxQGdsYS5hYy5pbiIsInJvbGxObyI6IjEifQ.I8rgjKUyw_PtDCc0jJpNujcWIFNPzfJy5TbRa6quMxQ",
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="find-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Company Name:
        <input
          className="form-input"
          type="text"
          name="companyname"
          value={formData.companyname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-label">
        Categories:
        <input
          className="form-input"
          type="text"
          name="categories"
          value={formData.categories}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-label">
        Top Price:
        <input
          className="form-input"
          type="number"
          name="topprice"
          value={formData.topprice}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-label">
        Min Price:
        <input
          className="form-input"
          type="number"
          name="minprice"
          value={formData.minprice}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-label">
        Max Price:
        <input
          className="form-input"
          type="number"
          name="maxprice"
          value={formData.maxprice}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Find;
