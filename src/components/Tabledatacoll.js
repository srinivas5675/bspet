import React, { useState } from 'react';

const DataEntryForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateofbirth: '',
    phone: '',
    gender: '',
    city: '',
  });

  // State to manage table data
  const [tableData, setTableData] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add data to the table
  const AddData = () => {
    setTableData([...tableData, formData]);
    resetForm();
  };

  // Reset the form fields
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      dateofbirth: '',
      phone: '',
      gender: '',
      city: '',
    });
  };

  // Delete a row from the table
  const deleteRow = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  return (
    <div>
      <h1>Data Entry Form</h1>
      <table>
        <tbody>
          <tr>
            <td><label>Name:</label></td>
            <td><input name="name" type="text" value={formData.name} onChange={handleInputChange} /></td>
            <td><label>Email:</label></td>
            <td><input name="email" type="text" value={formData.email} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><label>Date of Birth:</label></td>
            <td><input name="dateofbirth" type="date" value={formData.dateofbirth} onChange={handleInputChange} /></td>
            <td><label>Phone:</label></td>
            <td><input name="phone" type="text" value={formData.phone} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>
              <input id="male" name="gender" value="male" type="radio" checked={formData.gender === 'male'} onChange={handleInputChange} />
              <label htmlFor="male">Male</label>
              <input id="female" name="gender" value="female" type="radio" checked={formData.gender === 'female'} onChange={handleInputChange} />
              <label htmlFor="female">Female</label>
            </td>
            <td><label>City:</label></td>
            <td>
              <select name="city" value={formData.city} onChange={handleInputChange}>
                <option value="">Select a city</option>
                <option value="Audi">Audi</option>
                <option value="Benz">Benz</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <button onClick={AddData}>Save</button>
              <button onClick={resetForm} type="reset">Reset</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.dateofbirth}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.gender}</td>
              <td>{row.city}</td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataEntryForm;
