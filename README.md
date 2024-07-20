# Text Translation Bot

## Overview

The **Text Translation Bot** is a straightforward yet powerful tool designed to translate text between various languages. Utilizing the OpenAI API, it provides accurate and efficient translations with ease.

## YouTube Video

For a detailed walkthrough of the Text Translation Bot, check out the following video:
[Watch on YouTube](https://www.youtube.com/watch?v=dzgYvOiEOZc)

## Features

- **Multi-Language Support**: Translate text across multiple languages.
- **RESTful API**: Easy-to-use endpoints for seamless integration with other applications.
- **Real-Time Translation**: Receive translations instantly for a smooth user experience.
- **Error Handling**: Robust mechanisms to manage invalid input and API errors effectively.

## Technologies Used

- **Node.js**: JavaScript runtime environment for building scalable server-side applications.
- **TypeScript**: Typed superset of JavaScript that enhances development with type safety.
- **Express**: Flexible web framework for Node.js to simplify API creation.
- **OpenAI API**: Utilizes advanced AI models for high-quality text translation.
- **Nodemon**: Automatically restarts the server during development for a streamlined workflow.

## Getting Started

To get started with the Text Translation Bot, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/namanag0502/translate-bot.git
   cd translate-bot
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the Application**:
   ```bash
   pnpm start
   ```

5. **Access the API**:
   - **Translate Text**: Send a POST request to `http://localhost:4000/translate` with `language` and `text` parameters.
  
6. **Frontend**:
    ```bash
    cd frontend
   pnpm install
    pnpm run dev
   ```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **OpenAI**: For providing the AI models used in this project.
- **Node.js & Express**: For their powerful frameworks that made development easier.

Feel free to contribute to this project by opening issues or submitting pull requests!

---

This README file provides a clear overview of the project, its features, and how to get started, along with relevant technology details and resources.
