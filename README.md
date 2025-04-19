## Short Summary:

I created a full-stack web application called the Contractor Quote Portal & Performance Dashboard, designed to make it easier for contractors to submit roofing project quotes and explore useful trends in their data.
The portal has three main sections — a dashboard, a quote submission form, and a search quotes section — each built to serve a specific purpose in a clean and intuitive way.
The Dashboard page is all about insights. It gives an overview of key metrics like the total number of quotes submitted, how many unique states are involved, the most common roof type used, and a breakdown of how many quotes fall under each roof type (Foam, Shingle, Metal, EPDM, TPO, PVC). We can also choose a state from a dropdown to see the roof type distribution just for that state, making it easy to spot trends regionally. I also included three dynamic charts: one showing the number of projects per state, another displaying the average roof size per roof type, and a line graph tracking how quote submissions have changed month by month from July 2023 to April 2024.
The Submit Quote page allows contractors to input new roofing projects through a simple form. They enter details like contractor and company name, roof size, type of roofing material, the city and state of the project, and the project date. Once submitted, all this data is stored securely in Firebase Realtime Database, making it easy to track and visualize later.
The third page, Search Quotes, helps users quickly find specific quotes based on various filters. We can search by state, roof type, project date, contractor name, or company name. Depending on the search type, the interface adapts — so if we’re searching by roof type, for example, we’ll see a dropdown with available options, while searching by contractor name opens a text field. It’s flexible, fast, and helpful when trying to dig into specific project details.

## Tools Used and How to Run It Locally:

<br> **React.js** – JavaScript library for building the user interface
<br> **Vite** – Lightning-fast build tool and development server for React
<br> **JavaScript (ES6+)** – For frontend logic and interactivity
<br> **Tailwind CSS** – For responsive and utility-first styling
<br> **Firebase Realtime Database** – For storing quote submissions
<br> **Chart.js** – For rendering dynamic and interactive graphs.

## How to Run It Locally:

## 1.	Clone the Repository:

<br> git clone https://github.com/anjalibarigela2/Contractor-Data.git <br />
cd Contractor-Data

## 2. Install Dependencies:
Make sure you have Node.js and npm installed. Then run:

npm install

## 3. Start the Development Server:

npm run start

## Any mock data you generated:

I generated mock data for over 1,000 roofing project quotes to populate the performance dashboard and simulate realistic analytics.

Each mock record includes:

<br> Contractor Name
<br> Company Name
<br> Roof Size (sq ft) – randomized between realistic ranges (e.g., 200 to 10,000 sq ft)
<br> Roof Type – randomly selected from predefined types like Foam, Shingle, Metal, EPDM, TPO, and PVC
<br> City & State – randomly chosen from a list of U.S. cities and 51 states
<br> Project Date – randomly spread till April 2025.

![image](https://github.com/user-attachments/assets/4749b237-e27a-42fd-b22b-1b55ecedf31c)





