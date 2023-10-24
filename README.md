# Dilip Kumar Maurya | Web Developer (Readme)

This repository contains the source code for Dilip Kumar Maurya's personal website, showcasing his professional profile, projects, resume, and contact information. The website is built using React and Next.js, and it provides visitors with a comprehensive overview of Dilip's skills, experiences, and work.

## Project Structure

The repository is organized into several components and pages to create a fully functional personal website. Here's a brief overview of the key components and their purposes:

1. components/: This directory contains various React components that are reused across multiple pages of the website. Notable components include:

   - Header.js: The website's header, including navigation links.
   - Footer.js: The website's footer, providing contact information.
   - ProfileCard.js: A component that displays a profile card with personal information.
   - TimeLine.js: A component that showcases professional milestones on the About page.

2. data/: This directory contains data files used to populate content on various pages. For instance, the projects.js file holds information about projects displayed on the Projects page.

3. pages/: This directory contains the primary content pages of the website. Key pages include:

   - index.js: The home page.
   - about.js: The About page, which introduces Dilip's background and professional milestones.
   - projects.js: The Projects page, showcasing various projects, their descriptions, and external links.
   - resume.js: The Resume page, detailing Dilip's work experiences, skills, and education.
   - contact.js: The Contact page, featuring a contact form for visitor communication.

4. global.css: A global stylesheet used to define common styling across the entire website.

5. Script components: Embed scripts for Google Tag Manager and structured data, enhancing SEO and analytics.

6. react-helmet: A library used to manage the title of each page.

## Content and Functionality

**Home Page**: The home page provides a warm welcome to visitors and introduces Dilip's role as a web developer. It features a navigation menu for easy access to other sections of the website.

**About Page**: The About page offers an in-depth look at Dilip's professional background, skills, and interests. It includes a timeline of his career milestones and encourages visitors to reach out.

**Projects Page**: The Projects page showcases various projects created by Dilip. Each project entry includes a title, description, image, technologies used, and external links to live versions.

**Resume Page**: The Resume page provides comprehensive information about Dilip's work experiences, education, and technical skills. It also offers a link to download a PDF version of his resume.

**Contact Page**: The Contact page features a contact form for visitor communication. Upon successful submission, a confirmation message is displayed. It also provides contact details and links for reaching out to Dilip.

## Usage

To use this code for your personal website:

1. Clone the repository:

```
git clone https://github.com/yourusername/your-repo.git
```

2. Install dependencies:

```
npm install
```

3. Customize the content, styles, and metadata as needed to match your preferences and professional information.

4. Update the Google Apps Script URL in the contact.js file to your own Google Apps Script for form submissions if required.

5. Run the development server:

```
npm run dev
```

6. Access the website locally at http://localhost:3000 in your web browser.

## License

This personal website project is open-source and available under the MIT License.

Feel free to modify and extend this README with additional information or details specific to your project.

If you have any questions or need further assistance, please don't hesitate to reach out. Enjoy building your personal website!
