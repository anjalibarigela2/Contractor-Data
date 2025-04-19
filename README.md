## Short Summary:

I created a full-stack web application called the Contractor Quote System, designed to make it easier for contractors to submit roofing project quotes and explore useful trends in their data.
The application has three main sections - a dashboard, a quote submission form, and a search quotes section - each built to serve a specific purpose in a clean and intuitive way.
The Dashboard page is all about insights. It gives an overview of key metrics like the total number of quotes submitted, how many unique states are involved, the most common roof type used, and a breakdown of how many quotes fall under each roof type (Foam, Shingle, Metal, EPDM, TPO, PVC). We can also choose a state from a dropdown to see the roof type distribution just for that state, making it easy to spot trends regionally. I also included three charts: one showing the number of projects per state, another displaying the average roof size per roof type, and a line graph tracking how quote submissions have changed month by month.
The Submit Quote page allows contractors to input new roofing projects through a simple form. They enter details like contractor and company name, roof size, type of roofing material, the city and state of the project, and the project date. Once submitted, all this data is stored securely in Firestore Database, making it easy to track and visualize later.
The third page, Search Quotes, helps users quickly find specific quotes based on various filters. We can search by state, roof type, project date, contractor name, or company name. Depending on the search type, the interface adapts — so if we’re searching by roof type, for example, we’ll see a dropdown with available options, while searching by contractor name opens a text field. It’s flexible, fast, and helpful when trying to dig into specific project details.

## Dashboard looks like:

<br> ![Screenshot (177)](https://github.com/user-attachments/assets/ac03842c-d803-4d44-9542-051aba2e80ab) 

<br> ![Screenshot (180)](https://github.com/user-attachments/assets/68e45ada-0663-4960-b0e3-e2fb2b4b7406)

<br> ![Screenshot (178)](https://github.com/user-attachments/assets/85926c39-23ad-4ef1-b06d-68da6835ceca)

<br> ![Screenshot (179)](https://github.com/user-attachments/assets/04545d9a-8d8a-4a21-8440-e9a6783e83be)

## Tools Used and How to Run It Locally:

<br> **React.js** – JavaScript library for building the user interface
<br> **Vite** – Lightning-fast build tool and development server for React
<br> **JavaScript (ES6+)** – For frontend logic and interactivity
<br> **Tailwind CSS** – For responsive and utility-first styling
<br> **Firestore Database** – For storing quote submissions

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

<br> ![Screenshot (172)](https://github.com/user-attachments/assets/8a54e5da-b38a-4f23-9342-dd9ca25855c8)

<br> ![Screenshot (171)](https://github.com/user-attachments/assets/192b35ce-a0d6-4b61-aee2-2ba8e47a8c00)

<br> ![Screenshot (170)](https://github.com/user-attachments/assets/7490e845-16b4-40cd-baef-0db00b1cf442)

## What you’d improve with more time:

1. One meaningful improvement I’d love to add is allowing each contractor to log in with their own account and access a personalized dashboard. With Firebase Authentication, contractors could securely sign up or log in using their email and password. Once logged in, any quotes they submit would be automatically linked to their account. This way, when they visit their dashboard, they’d see only their own projects making it a more personal and organized experience. They’d be able to track all the quotes they’ve submitted and view charts that show trends in their own data, like the most common roof types they work with, average roof sizes, and how active they’ve been over the months. I’d use React for the interface, Firebase for user management and storing the data. This would not only make the app feel more secure and professional but also give contractors a simple, self-serve way to manage their work in one place.

2. Another useful improvement I’d make is adding the ability to export and download dashboard data or quote search results in formats like PDF, CSV, or Excel. This feature would allow contractors and stakeholders to easily generate reports, share insights, or keep offline records of their submissions and trends. For example, on the dashboard page, users could export visual summaries as a PDF report or download the raw data behind the charts as a CSV or Excel file. On the search quotes page, they could apply filters and then export the filtered results for further analysis. This can be implemented using libraries like react-csv or SheetJS for CSV/Excel downloads. It adds a layer of professionalism and convenience, especially for users who need to present data or maintain external documentation.








