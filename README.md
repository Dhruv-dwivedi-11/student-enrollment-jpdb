# Student Enrollment Form Micro Project

## Description
This project is a simple and interactive Student Enrollment Form built using HTML, CSS, and JavaScript, integrated with JsonPowerDB as the backend database service.  
It allows users to add new student records, update existing ones, and reset the form for fresh inputs. The form fetches student data by Roll No and supports CRUD operations via JsonPowerDB APIs.

## Benefits of Using JsonPowerDB
- **Serverless backend**: No need to manage your own server or database.  
- **Easy JSON API**: Perform database operations using simple JSON requests.  
- **Fast prototyping**: Quickly build and deploy micro projects without complex backend coding.  
- **Lightweight**: Minimal dependencies and easy to integrate with any frontend framework.

## Release History
- **v1.0** - Initial release with full functionality:
  - Fetch student details by Roll No
  - Add new student records
  - Update existing student information
  - Reset form for new entries

## Table of Contents
- [Description](#description)  
- [Benefits of Using JsonPowerDB](#benefits-of-using-jsonpowerdb)  
- [Release History](#release-history)  
- [Scope of Functionalities](#scope-of-functionalities)  
- [Usage Instructions](#usage-instructions)  
- [Project Status](#project-status)  
- [Sources and References](#sources-and-references)

## Scope of Functionalities
- Input a Roll No to search for existing student data.
- Enable form fields for new data entry if the Roll No does not exist.
- Save new student records to the database.
- Update existing student records by editing form fields.
- Reset the form to clear all inputs and start fresh.

## Usage Instructions
1. Open `index.html` in a modern web browser.  
2. Enter a student Roll No and move focus away (onblur event triggers fetch).  
3. If the student exists, their details populate the form, and the update button is enabled.  
4. If not, form fields become editable for new student data input, and the save button is enabled.  
5. Use **Save** to add new records or **Update** to modify existing ones.  
6. **Reset** clears the form for new input.

## Project Status
The project is currently stable and suitable for learning, demos, or as a starting point for more complex enrollment systems.

## Sources and References
- [JsonPowerDB Documentation](https://jsonpowerdb.com)  
- [Login2Explore API](https://login2explore.com)  
- [jQuery Library](https://jquery.com)  
- [NetBeans IDE](https://netbeans.apache.org)  

---

Feel free to contribute improvements or report issues!

