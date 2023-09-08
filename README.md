# Vite React Admin Panel - Admin  Page

This is a simple React admin login page component created using Vite. It provides a user interface for administrators to log in to an admin panel. The login page includes input fields for username and password, error handling for invalid login attempts, and a loading state to simulate authentication.

## Getting Started

To use this Admin Login Page component in your Vite React project, check https://admin-dashboard-one-gamma.vercel.app/ or follow these steps:

1. Clone or download the repository containing this component:

   ```bash
   git clone https://github.com//Dearbornadeolu/Admin-dashboard.git
   ```

2. Navigate to the directory where the component is located.

3. Install the required dependencies for your Vite project:

   ```bash
   npm install
   ```

4. Import and use the `AdminLoginPage` component in your project.

## Usage

You can use the `AdminLoginPage` component in your project as follows:

```javascript
import React from 'react';
import AdminLoginPage from './AdminLoginPage';

function App() {
  return (
    <div>
      {/* Other components */}
      <AdminLoginPage />
      {/* Other components */}
    </div>
  );
}

export default App;
```

## Features

### Form Fields

- **Username**: Users can enter their username in this field.
- **Password**: Users can enter their password in this field (input is masked).

### Authentication

- When a user submits the login form, the component checks if the provided username and password match the predefined values (username: 'admin', password: 'password'). If the credentials are correct, the user is redirected to the dashboard page after a simulated delay.

### Error Handling

- If the user enters incorrect credentials, an error message is displayed, informing them that the login attempt was unsuccessful.

### Loading State

- While the login attempt is being processed, a loading message is displayed to indicate that the authentication is in progress.

## Customization

You can customize the styling of the login form and error messages by modifying the CSS classes and styles defined in the component.

## Dependencies

- React: ^version
- react-router-dom: ^version

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- Your Name
- GitHub: [Your GitHub Profile](https://github.com/Dearbornadeolu)

## Acknowledgments

- This component was created using Vite and React.
- Inspiration: Provide credit or mention any resources or libraries that inspired this component.

Feel free to adapt and extend this component to suit your specific admin panel project needs. Enjoy using the Vite React Admin Panel Admin Login Page!
