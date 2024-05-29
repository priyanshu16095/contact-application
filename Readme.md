## Contact Application
This is a full-stack contact application built using React.js and Java Spring Boot. The application allows users to manage their contacts, including adding new contacts, updating existing ones, and uploading contact images.

### Key Features
- **Responsiveness**: The application is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.
- **Pagination**: Contacts are paginated to improve performance and user experience, particularly when dealing with a large number of contacts.
- **Upload Image File**: Users can upload images for their contacts, making it easier to identify them at a glance.

### Technologies Used
- **Frontend**: React.js
- **Backend**: Java Spring Boot
- **Database**: MySQL

### Installation
1. Clone the repository.
2. For the backend server:
   ```
      mvn clean install
      mvn spring-boot:run
   ```
   Add your database url, username and password in the application.yml file
   In the controller and serviceimpl directory provide PHOTO_DIRECTORY according to you system.
4. For the Frontend:
    ```bash
       npm install
       npm run dev
    ```
    
Author: Priyanshu Gupta
Created: May 05, 2024

### Application Images

* Homepage
![](./frontend/public/01.png)
![](./frontend/public/02.png)
    
* Add Contact
![](./frontend/public/05.png)
![](./frontend/public/04.png)

* Update Contact
![](./frontend/public/07.png)
![](./frontend/public/06.png)

* Pagination
![](./frontend/public/08.png)
![](./frontend/public/09.png)

* Responsiveness
![](./frontend/public/10.png)
![](./frontend/public/11.png)
![](./frontend/public/12.png)
![](./frontend/public/13.png)
![](./frontend/public/14.png)
![](./frontend/public/15.png)
![](./frontend/public/16.png)
![](./frontend/public/17.png)

