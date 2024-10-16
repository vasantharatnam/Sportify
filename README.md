# Sports Booking Application

**College ID:** IIT2021185

## Project Overview
The Sports Booking Application is a web-based solution that enables booking and management of courts across multiple sports centers. It is designed for a sports technology company’s operations team to seamlessly view, manage, and prevent duplicate bookings. 

The project uses **Netlify** for frontend deployment and **Render.com** for backend hosting, with **MongoDB Atlas** handling data storage.

---

## Prerequisites
- **Node.js** (v14.x or later) and **npm** installed.
- **MongoDB Atlas** account for cloud database hosting.
- **GitHub** account for code management.

---

## Setup Instructions

### Backend Setup (Render.com)
1. Navigate to the backend directory:
    ```bash
    cd backend
    npm install
    ```

2. Create a `.env` file in the `backend/` directory with the following content:
    ```env
    MONGO_URI=your_mongodb_atlas_uri
    PORT=5000
    ```

3. Deploy to Render.com:
    - Login to [Render.com](https://render.com) and create a new Web Service.
    - Connect your GitHub repository containing the backend.
    - Add the following environment variables in Render’s **Environment tab**:
      ```makefile
      MONGO_URI=your_mongodb_atlas_uri
      PORT=5000
      ```
    - Deploy the service.

4. Backend URL:  
   `https://sportify-m8gu.onrender.com`

---

### Frontend Setup (Netlify)
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    npm install
    ```

2. Create a `.env` file in the `frontend/` directory:
    ```env
    VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
    ```

3. Build the frontend:
    ```bash
    npm run build
    ```

4. Deploy to Netlify:
    - Login to [Netlify](https://netlify.com) and create a new site.
    - Connect your GitHub repository containing the frontend.
    - Add the following environment variable in Netlify’s **Environment tab**:
      ```arduino
      VITE_API_BASE_URL=https://sportify-m8gu.onrender.com
      ```
    - Deploy the site.

5. Frontend URL:  
   `https://gamygame.netlify.app/`

---

## Running the Application Locally

### Backend:
- Navigate to the `backend/` directory and start the server:
    ```bash
    npm run dev
    ```

### Frontend:
- Navigate to the `frontend/` directory and start the development server:
    ```bash
    npm run dev
    ```

---

## Deployed URLs
- **Frontend (Netlify):**  
  `https://gamygame.netlify.app/`

- **Backend (Render.com):**  
  `https://sportify-m8gu.onrender.com`

---

## Assumptions and Limitations
- **Time Slots:** Each booking slot is 60 minutes long.
- **No Authentication:** User authentication is not implemented.
- **Single Booking Limit:** Only one booking can be made for a court per time slot.
- **Date Format:** The application expects dates in `YYYY-MM-DD` format.

---

## Dependencies

### Frontend:
- Vite  
- React.js  
- TailwindCSS  
- Axios  

### Backend:
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  

---

## Special Instructions
1. Ensure MongoDB Atlas cluster IP is properly whitelisted to allow access.
2. Use valid date inputs to avoid booking errors.
3. To reset data, rerun the seed script in the `backend/` directory:
    ```bash
    npm run seed
    ```
